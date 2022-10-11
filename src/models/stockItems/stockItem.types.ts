import { Document, Model, Types } from 'mongoose';

export interface IStockItem {
  name: string;
  category: Types.ObjectId;
  price: number;
  quantity: number;
  isAvailable: boolean;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IStockItemDocument extends IStockItem, Document {
  setLastUpdated: (this: IStockItemDocument) => Promise<void>;
}

export interface IStockItemModel extends Model<IStockItemDocument> {
  paginate: (
    filter: any,
    options: any
  ) => {
    results: any;
    page: number;
    limit: number;
    totalPages: number;
    totalResults: any;
  };
}
