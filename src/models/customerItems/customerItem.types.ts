import { Document, Model, Types } from 'mongoose';

export interface ICustomerItem {
  customerName: Types.ObjectId;
  itemName: string;
  price: number;
  quantity: number;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface ICustomerItemDocument extends ICustomerItem, Document {
  setLastUpdated: (this: ICustomerItemDocument) => Promise<void>;
}

export interface ICustomerItemModel extends Model<ICustomerItemDocument> {
  isEmailTaken: (
    this: ICustomerItemModel,
    name: string,
    excludeId?: string
  ) => Promise<boolean>;
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
