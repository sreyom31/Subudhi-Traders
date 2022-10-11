import { model } from 'mongoose';
import { IStockItemDocument, IStockItemModel } from './stockItem.types';
import StockItemSchema from './stockItem.schema';

const StockItemModel = model<IStockItemDocument, IStockItemModel>(
  'stockItem',
  StockItemSchema
);
export default StockItemModel;
