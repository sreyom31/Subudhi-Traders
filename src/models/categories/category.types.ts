import { Document, Model } from 'mongoose';

export interface ICategory {
  categoryName: string;
}

export interface ICategoryDocument extends ICategory, Document {
  setLastUpdated: (this: ICategoryDocument) => Promise<void>;
}

export interface ICategoryModel extends Model<ICategoryDocument> {
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
