import { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import customerRoute from './customer.route';

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/users', route: userRoute },
  { path: '/customers', route: customerRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
