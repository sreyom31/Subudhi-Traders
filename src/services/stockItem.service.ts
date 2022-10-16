import httpStatus from 'http-status';
import StockItemModel from '../models/stockItems/stockItem.model';
import ApiError from '../utils/ApiError';
import { StockItem, StockItemUpdate } from '../shared/customTypes';

const createStockItem = async (stockItemBody: StockItem) => {
  return StockItemModel.create(stockItemBody);
};

const getStockItemById = async (id: string) => StockItemModel.findById(id);
const getStockItemByCategoryId = async (categoryId: string) => {
  return StockItemModel.findOne({ category: categoryId }).populate('category');
};

const queryStockItems = async (filter: any, options: any) => {
  const stockItems = await StockItemModel.paginate(filter, options);
  return stockItems;
};

const updateStockItemById = async (
  stockItemId: string,
  updateBody: StockItemUpdate
) => {
  const stockItem = await getStockItemById(stockItemId);
  if (!stockItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StockItem not found');
  }
  Object.assign(stockItem, updateBody);
  await stockItem.save();
  return stockItem.populate('category');
};

const deleteStockItemById = async (stockItemId: string) => {
  const stockItem = await getStockItemById(stockItemId);
  if (!stockItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StockItem not found');
  }
  await stockItem.remove();
  return stockItem;
};

export default {
  createStockItem,
  getStockItemById,
  getStockItemByCategoryId,
  queryStockItems,
  updateStockItemById,
  deleteStockItemById,
};
