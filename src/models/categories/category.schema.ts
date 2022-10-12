import { Schema } from 'mongoose';
import { setLastUpdated } from './category.methods';
import { toJSON, paginate } from '../plugins';

const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    unique: true,
  },
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

// add plugin that converts mongoose to json
CategorySchema.plugin(toJSON);
CategorySchema.plugin(paginate);
CategorySchema.methods.setLastUpdated = setLastUpdated;

export default CategorySchema;
