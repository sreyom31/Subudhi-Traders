import z from 'zod';
import { Types } from 'mongoose';

const createCustomerItem = z.object({
  body: z
    .object({
      customerName: z.string().trim(),
      itemName: z.string().trim(),
      price: z.number(),
      quantity: z.number(),
      dateOfEntry: z.date(),
      lastUpdated: z.date(),
    })
    .partial(),
});

const getCustomerItems = z.object({
  query: z
    .object({
      customerName: z.string().trim(),
      itemName: z.string().trim(),
      price: z.number(),
      quantity: z.number(),
      dateOfEntry: z.date(),
      lastUpdated: z.date(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getCustomerItem = z.object({
  params: z.object({
    customerItemId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid customerItem id',
        path: ['CustomerItem Query'],
      }),
  }),
});

const updateCustomerItem = z.object({
  params: z.object({
    customerItemId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid customerItem id',
        path: ['CustomerItem update'],
      }),
  }),
  body: z
    .object({
      customerName: z.string().trim(),
      itemName: z.string().trim(),
      price: z.number(),
      quantity: z.number(),
      dateOfEntry: z.date(),
      lastUpdated: z.date(),
    })
    .partial(),
});

const deleteCustomerItem = z.object({
  params: z.object({
    customerItemId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid customerItem id',
        path: ['CustomerItem delete'],
      }),
  }),
});

export {
  createCustomerItem,
  getCustomerItems,
  getCustomerItem,
  updateCustomerItem,
  deleteCustomerItem,
};
