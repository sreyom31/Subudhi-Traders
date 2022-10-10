import { Schema } from 'mongoose';
import validator from 'validator';
import { setLastUpdated } from './customer.methods';
import { isEmailTaken } from './customer.statics';
import { toJSON, paginate } from '../plugins';

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  dueAmount: {
    type: Number,
  },
  isCleared: {
    type: Boolean,
  },
  phoneNo: {
    type: String,
    required: [true, 'Phone Number is required'],
  },
  whatsappNo: {
    type: String,
    required: [true, 'Whatsapp Number is required'],
  },
  isImp: {
    type: Boolean,
    required: [true, 'Is Important is required'],
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
CustomerSchema.plugin(toJSON);
CustomerSchema.plugin(paginate);
CustomerSchema.methods.setLastUpdated = setLastUpdated;
CustomerSchema.statics.isEmailTaken = isEmailTaken;

export default CustomerSchema;