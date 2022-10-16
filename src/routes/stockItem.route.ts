import { Router } from 'express';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import stockItemController from '../controllers/stockItem.controller';
import { stockItemValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth(),
    validate(stockItemValidation.createStockItem),
    stockItemController.createStockItem
  )
  .get(
    auth(),
    validate(stockItemValidation.getStockItems),
    stockItemController.getStockItems
  );

router
  .route('/:stockItemId')
  .get(
    auth(),
    validate(stockItemValidation.getStockItem),
    stockItemController.getStockItem
  )
  .patch(
    auth(),
    validate(stockItemValidation.updateStockItem),
    stockItemController.updateStockItem
  )
  .delete(
    auth(),
    validate(stockItemValidation.deleteStockItem),
    stockItemController.deleteStockItem
  );

export default router;
