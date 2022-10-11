import { model } from 'mongoose';
import { ICategoryDocument, ICategoryModel } from './category.types';
import CategorySchema from './category.schema';

const CategoryModel = model<ICategoryDocument, ICategoryModel>(
  'category',
  CategorySchema
);
export default CategoryModel;
