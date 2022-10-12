import { Model } from 'mongoose';
import { ICustomerDocument } from './customer.types';

export async function isEmailTaken(
  this: Model<ICustomerDocument>,
  email: string,
  excludeId: string
) {
  const customer = await this.findOne({
    email,
    _id: { $ne: excludeId || null },
  });
  console.log(email);
  return customer;
}

export async function isPhoneNoTaken(
  this: Model<ICustomerDocument>,
  phoneNo: string,
  excludeId: string
) {
  const customer = await this.findOne({
    phoneNo,
    _id: { $ne: excludeId || null },
  });
  console.log(phoneNo);
  return customer;
}

export async function isWhatsappNoTaken(
  this: Model<ICustomerDocument>,
  whatsappNo: string,
  excludeId: string
) {
  const customer = await this.findOne({
    whatsappNo,
    _id: { $ne: excludeId || null },
  });
  console.log(whatsappNo);
  return customer;
}
