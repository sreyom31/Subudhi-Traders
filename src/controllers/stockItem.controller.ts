import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { stockItemService } from '../services';

const createStockItem = catchAsync(async (req: Request, res: Response) => {
  const stockItem = await stockItemService.createStockItem(req.body);
  res.status(httpStatus.CREATED).send(stockItem);
});

const getStockItem = catchAsync(async (req: Request, res: Response) => {
  const stockItem = await stockItemService.getStockItemById(
    req.params.stockItemId
  );
  if (!stockItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StockItem not found');
  }
  res.send(stockItem);
});

const getStockItems = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, [
    'name',
    'category',
    'price',
    'quantity',
    'isAvailable',
    'dateOfEntry',
    'lastUpdated',
  ]);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await stockItemService.queryStockItems(filter, options);
  res.send(result);
});

const updateStockItem = catchAsync(async (req: Request, res: Response) => {
  const stockItem = await stockItemService.updateStockItemById(
    req.params.stockItemId,
    req.body
  );
  res.send(stockItem);
});

const deleteStockItem = catchAsync(async (req: Request, res: Response) => {
  await stockItemService.deleteStockItemById(req.params.stockItemId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createStockItem,
  getStockItem,
  getStockItems,
  updateStockItem,
  deleteStockItem,
};
