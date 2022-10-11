import z from 'zod';
import { Types } from 'mongoose';

const createCustomer = z.object({
  body: z
    .object({
      name: z.string().trim(),
      email: z.string().email().trim(),
      dueAmount: z.number(),
      isCleared: z.boolean(),
      phoneNo: z.string().trim(),
      whatsappNo: z.string().trim(),
      isImp: z.boolean(),
    })
    .partial(),
});

const getCustomers = z.object({
  query: z
    .object({
      name: z.string().trim(),
      email: z.string().email().trim(),
      dueAmount: z.number(),
      isCleared: z.boolean(),
      phoneNo: z.string().trim(),
      whatsappNo: z.string().trim(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getCustomer = z.object({
  params: z.object({
    customerId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid customer id',
        path: ['Customer Query'],
      }),
  }),
});

const updateCustomer = z.object({
  params: z.object({
    customerId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid customer id',
        path: ['Customer update'],
      }),
  }),
  body: z
    .object({
      name: z.string().trim(),
      email: z.string().email().trim(),
      dueAmount: z.number(),
      isCleared: z.boolean(),
      phoneNo: z.string().trim(),
      whatsappNo: z.string().trim(),
      isImp: z.boolean(),
    })
    .partial()
    .refine((body) => Object.keys(body).length, {
      message: 'No fields to update',
      path: ['Customer update'],
    }),
});

const deleteCustomer = z.object({
  params: z.object({
    customerId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid customer id',
        path: ['Customer delete'],
      }),
  }),
});

export default {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
