import httpStatus from 'http-status';
import CustomerItemModel from '../models/customerItems/customerItem.model';
import ApiError from '../utils/ApiError';
import { CustomerItem, CustomerItemUpdate } from '../shared/customTypes';

const createCustomerItem = async (customerItemBody: CustomerItem) => {
  return CustomerItemModel.create(customerItemBody);
};

const getCustomerItemById = async (id: string) =>
  CustomerItemModel.findById(id);

const queryCustomerItems = async (filter: any, options: any) => {
  const customerItems = await CustomerItemModel.paginate(filter, options);
  return customerItems;
};

const updateCustomerItemById = async (
  customerItemId: string,
  updateBody: CustomerItemUpdate
) => {
  const customerItem = await getCustomerItemById(customerItemId);
  if (!customerItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'CustomerItem not found');
  }
  Object.assign(customerItem, updateBody);
  await customerItem.save();
  return customerItem;
};

const deleteCustomerItemById = async (customerItemId: string) => {
  const customerItem = await getCustomerItemById(customerItemId);
  if (!customerItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'CustomerItem not found');
  }
  await customerItem.remove();
  return customerItem;
};

export default {
  createCustomerItem,
  getCustomerItemById,
  queryCustomerItems,
  updateCustomerItemById,
  deleteCustomerItemById,
};
