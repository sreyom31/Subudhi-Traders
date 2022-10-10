import { Schema } from 'mongoose';
import { setLastUpdated } from './customerItem.methods';
import { toJSON, paginate } from '../plugins';

const CustomerItemSchema = new Schema({
  customerName: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: [true, 'Customer Name is required'],
  },
  itemName: {
    type: String,
    required: [true, 'Item Name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
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
CustomerItemSchema.plugin(toJSON);
CustomerItemSchema.plugin(paginate);
CustomerItemSchema.methods.setLastUpdated = setLastUpdated;

export default CustomerItemSchema;
