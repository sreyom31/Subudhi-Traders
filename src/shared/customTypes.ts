export type User = {
  name: string;
  email: string;
  password: string;
};

export type UserUpdate = {
  name?: string;
  email?: string;
  password?: string;
  domain?: string;
  designation?: string;
  isEmailVerified?: boolean;
};

export type Customer = {
  name: string;
  email?: string;
  dueAmount?: number;
  isCleared?: boolean;
  phoneNo: string;
  whatsappNo?: string;
  isImp?: boolean;
};

export type CustomerUpdate = {
  name?: string;
  email?: string;
  dueAmount?: number;
  isCleared?: boolean;
  phoneNo?: string;
  whatsappNo?: string;
  isImp?: boolean;
};

export type Category = {
  name: string;
};

export type CategoryUpdate = {
  name: string;
};

export type StockItem = {
  name: string;
  category: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
};

export type StockItemUpdate = {
  name?: string;
  category?: string;
  price?: number;
  quantity?: number;
  isAvailable?: boolean;
};

export type CustomerItem = {
  customerName: string;
  itemName: string;
  price: number;
  quantity: number;
  dateOfEntry: Date;
  lastUpdated: Date;
};

export type CustomerItemUpdate = {
  customerName?: string;
  itemName?: string;
  price?: number;
  quantity?: number;
  dateOfEntry?: Date;
  lastUpdated?: Date;
};
