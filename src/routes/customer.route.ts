import { Router } from 'express';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import customerController from '../controllers/customer.controller';
import { customerValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth(),
    validate(customerValidation.createCustomer),
    customerController.createCustomer
  )
  .get(
    auth(),
    validate(customerValidation.getCustomers),
    customerController.getCustomers
  );

router
  .route('/:customerId')
  .get(
    auth(),
    validate(customerValidation.getCustomer),
    customerController.getCustomer
  )
  .patch(
    auth(),
    validate(customerValidation.updateCustomer),
    customerController.updateCustomer
  )
  .delete(
    auth(),
    validate(customerValidation.deleteCustomer),
    customerController.deleteCustomer
  );

export default router;
