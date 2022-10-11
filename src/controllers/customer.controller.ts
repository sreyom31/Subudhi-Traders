import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { customerService } from '../services';

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const customer = await customerService.createCustomer(req.body);
  res.status(httpStatus.CREATED).send(customer);
});

const getCustomer = catchAsync(async (req: Request, res: Response) => {
  const customer = await customerService.getCustomerById(req.params.customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer not found');
  }
  res.send(customer);
});

const getCustomers = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, [
    'name',
    'email',
    'phoneNo',
    'whastappNo',
    'dueAmount',
    'isCleared',
    'isImp',
  ]);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await customerService.queryCustomers(filter, options);
  res.send(result);
});

const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const customer = await customerService.updateCustomerById(
    req.params.customerId,
    req.body
  );
  res.send(customer);
});

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  await customerService.deleteCustomerById(req.params.customerId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
};
