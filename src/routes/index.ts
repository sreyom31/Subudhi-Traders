import { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import customerRoute from './customer.route';
import categoryRoute from './category.route';

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/users', route: userRoute },
  { path: '/customers', route: customerRoute },
  { path: '/categories', route: categoryRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
