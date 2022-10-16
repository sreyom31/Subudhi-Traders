import { Router } from 'express';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import customerItemController from '../controllers/customerItem.controller';
import { customerItemValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth(),
    validate(customerItemValidation.createCustomerItem),
    customerItemController.createCustomerItem
  )
  .get(
    auth(),
    validate(customerItemValidation.getCustomerItems),
    customerItemController.getCustomerItems
  );

router
  .route('/:customerItemId')
  .get(
    auth(),
    validate(customerItemValidation.getCustomerItem),
    customerItemController.getCustomerItem
  )
  .patch(
    auth(),
    validate(customerItemValidation.updateCustomerItem),
    customerItemController.updateCustomerItem
  )
  .delete(
    auth(),
    validate(customerItemValidation.deleteCustomerItem),
    customerItemController.deleteCustomerItem
  );

export default router;
