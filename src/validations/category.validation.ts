import z from 'zod';
import { Types } from 'mongoose';

const createCategory = z.object({
  body: z.object({
    categoryName: z.string().trim(),
  }),
});

const getCategories = z.object({
  query: z
    .object({
      categoryName: z.string().trim(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getCategory = z.object({
  params: z.object({
    categoryId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid category id',
        path: ['Category Query'],
      }),
  }),
});

const updateCategory = z.object({
  params: z.object({
    categoryId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid category id',
        path: ['Category update'],
      }),
  }),
  body: z.object({
    categoryName: z.string().trim(),
  }),
});

const deleteCategory = z.object({
  params: z.object({
    categoryId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid category id',
        path: ['Category delete'],
      }),
  }),
});

export default {
  createCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
