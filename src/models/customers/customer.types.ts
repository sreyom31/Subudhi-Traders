import { Document, Model } from 'mongoose';

export interface ICustomer {
  name: string;
  email: string;
  dueAmount: number;
  isCleared: boolean;
  phoneNo: string;
  whatsappNo: string;
  isImp: boolean;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface ICustomerDocument extends ICustomer, Document {
  setLastUpdated: (this: ICustomerDocument) => Promise<void>;
}

export interface ICustomerModel extends Model<ICustomerDocument> {
  isEmailTaken: (
    this: ICustomerModel,
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
