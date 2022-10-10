import { Model } from 'mongoose';
import { ICustomerDocument } from './customer.types';

export async function isEmailTaken(
  this: Model<ICustomerDocument>,
  email: string,
  excludeId: string
) {
  const customer = await this.findOne({ email, _id: { $ne: excludeId || null } });
  console.log(email);
  return !!user;
}