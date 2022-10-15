import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { categoryService } from '../services';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const category = await categoryService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(category);
});

const getCategory = catchAsync(async (req: Request, res: Response) => {
  const category = await categoryService.getCategoryById(req.params.categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  res.send(category);
});

const getCategories = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['categoryName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await categoryService.queryCategories(filter, options);
  res.send(result);
});

const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const category = await categoryService.updateCategoryById(
    req.params.categoryId,
    req.body
  );
  res.send(category);
});

const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  await categoryService.deleteCategoryById(req.params.categoryId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
