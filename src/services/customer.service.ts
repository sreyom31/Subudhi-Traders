import httpStatus from 'http-status';
import CustomerModel from '../models/customers/customer.model';
import ApiError from '../utils/ApiError';
import { Customer, CustomerUpdate } from '../shared/customTypes';

const createCustomer = async (customerBody: Customer) => {
  if (await CustomerModel.isPhoneNoTaken(customerBody.phoneNo)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Phone no already taken');
  }
  if (
    customerBody.email &&
    (await CustomerModel.isEmailTaken(customerBody.email))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (
    customerBody.whatsappNo &&
    (await CustomerModel.isWhatsappNoTaken(customerBody.whatsappNo))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Whatsapp no already taken');
  }
  return CustomerModel.create(customerBody);
};

const getCustomerById = async (id: string) => CustomerModel.findById(id);
const getCustomerByPhoneNo = async (phoneNo: string) => {
  return CustomerModel.findOne({ phoneNo });
};

const queryCustomers = async (filter: any, options: any) => {
  const customers = await CustomerModel.paginate(filter, options);
  return customers;
};

const updateCustomerById = async (
  customerId: string,
  updateBody: CustomerUpdate
) => {
  const customer = await getCustomerById(customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer not found');
  }
  if (
    updateBody.phoneNo &&
    (await CustomerModel.isPhoneNoTaken(updateBody.phoneNo, customerId))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Phone no already taken');
  }
  if (
    updateBody.email &&
    (await CustomerModel.isEmailTaken(updateBody.email))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (
    updateBody.whatsappNo &&
    (await CustomerModel.isWhatsappNoTaken(updateBody.whatsappNo))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Whatsapp no already taken');
  }
  Object.assign(customer, updateBody);
  await customer.save();
  return customer;
};

const deleteCustomerById = async (customerId: string) => {
  const customer = await getCustomerById(customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer not found');
  }
  await customer.remove();
  return customer;
};

export default {
  createCustomer,
  updateCustomerById,
  queryCustomers,
  deleteCustomerById,
  getCustomerById,
  getCustomerByPhoneNo,
};
