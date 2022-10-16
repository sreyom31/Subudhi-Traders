import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { customerItemService } from '../services';

const createCustomerItem = catchAsync(async (req: Request, res: Response) => {
  const customerItem = await customerItemService.createCustomerItem(req.body);
  res.status(httpStatus.CREATED).send(customerItem);
});

const getCustomerItem = catchAsync(async (req: Request, res: Response) => {
  const customerItem = await customerItemService.getCustomerItemById(
    req.params.customerItemId
  );
  if (!customerItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'CustomerItem not found');
  }
  res.send(customerItem);
});

const getCustomerItems = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, [
    'customerName',
    'itemName',
    'price',
    'quantity',
    'dateOfEntry',
    'lastUpdated',
  ]);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await customerItemService.queryCustomerItems(filter, options);
  res.send(result);
});

const updateCustomerItem = catchAsync(async (req: Request, res: Response) => {
  const customerItem = await customerItemService.updateCustomerItemById(
    req.params.customerItemId,
    req.body
  );
  res.send(customerItem);
});

const deleteCustomerItem = catchAsync(async (req: Request, res: Response) => {
  await customerItemService.deleteCustomerItemById(req.params.customerItemId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createCustomerItem,
  getCustomerItem,
  getCustomerItems,
  updateCustomerItem,
  deleteCustomerItem,
};
