import { ICustomerDocument } from './customer.types';

export async function setLastUpdated(this: ICustomerDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
