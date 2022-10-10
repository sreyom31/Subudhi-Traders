import { model } from 'mongoose';
import {
  ICustomerItemDocument,
  ICustomerItemModel,
} from './customerItem.types';
import CustomerItemSchema from './customerItem.schema';

const CustomerItemModel = model<ICustomerItemDocument, ICustomerItemModel>(
  'customer',
  CustomerItemSchema
);
export default CustomerItemModel;
