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
