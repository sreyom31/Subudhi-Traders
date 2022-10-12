import httpStatus from 'http-status';
import CategoryModel from '../models/categories/category.model';
import ApiError from '../utils/ApiError';

const createCategory = async (categoryBody: Category) => {
  return CategoryModel.create(categoryBody); //! check if unique property works or not
};

const getCategoryById = async (id: string) => CategoryModel.findById(id);

const queryCategories = async (filter: any, options: any) => {
  const categories = await CategoryModel.paginate(filter, options);
  return categories;
};

const updateCategoryById = async (
  categoryId: string,
  updateBody: CategoryUpdate
) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
};

const deleteCategoryById = async (categoryId: string) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  await category.remove();
  return category;
};

export default {
  createCategory,
  getCategoryById,
  queryCategories,
  updateCategoryById,
  deleteCategoryById,
};
