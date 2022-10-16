import { Schema } from 'mongoose';
import { setLastUpdated } from './stockItem.methods';
import { toJSON, paginate } from '../plugins';

const StockItemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  isAvailable: {
    type: Boolean,
    required: [true, 'Availability is required'],
    default: true,
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
StockItemSchema.plugin(toJSON);
StockItemSchema.plugin(paginate);
StockItemSchema.methods.setLastUpdated = setLastUpdated;

export default StockItemSchema;
