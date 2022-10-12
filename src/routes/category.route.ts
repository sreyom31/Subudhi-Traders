import { Router } from 'express';
import categoryController from '../controllers/category.controller';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { categoryValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth(),
    validate(categoryValidation.createCategory),
    categoryController.createCategory
  )
  .get(
    auth(),
    validate(categoryValidation.getCategories),
    categoryController.getCategories
  );

router
  .route('/:categoryId')
  .get(
    auth(),
    validate(categoryValidation.getCategory),
    categoryController.getCategory
  )
  .patch(
    auth(),
    validate(categoryValidation.updateCategory),
    categoryController.updateCategory
  )
  .delete(
    auth(),
    validate(categoryValidation.deleteCategory),
    categoryController.deleteCategory
  );

export default router;
