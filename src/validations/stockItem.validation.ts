import z from 'zod';
import { Types } from 'mongoose';

const createStockItem = z.object({
  body: z
    .object({
      name: z.string().trim(),
      category: z.string().refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid category id',
        path: ['StockItem Query'],
      }),
      price: z.number(),
      quantity: z.number(),
      isAvailable: z.boolean(),
    })
    .partial(),
});

const getStockItems = z.object({
  query: z
    .object({
      name: z.string().trim(),
      category: z.string().refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid category id',
        path: ['StockItem Query'],
      }),
      price: z.number(),
      quantity: z.number(),
      isAvailable: z.boolean(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getStockItem = z.object({
  params: z.object({
    stockItemId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid stockItem id',
        path: ['StockItem Query'],
      }),
  }),
});

const updateStockItem = z.object({
  params: z.object({
    stockItemId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid stockItem id',
        path: ['StockItem update'],
      }),
  }),
  body: z
    .object({
      name: z.string().trim(),
      category: z.string().refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid category id',
        path: ['StockItem Query'],
      }),
      price: z.number(),
      quantity: z.number(),
      isAvailable: z.boolean(),
    })
    .partial(),
});

const deleteStockItem = z.object({
  params: z.object({
    stockItemId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid stockItem id',
        path: ['StockItem delete'],
      }),
  }),
});

export default {
  createStockItem,
  getStockItems,
  getStockItem,
  updateStockItem,
  deleteStockItem,
};
