import { model } from 'mongoose';
import { ICustomerDocument, ICustomerModel } from './customer.types';
import CustomerSchema from './customer.schema';

const CustomerModel = model<ICustomerDocument, ICustomerModel>(
  'customer',
  CustomerSchema
);
export default CustomerModel;
