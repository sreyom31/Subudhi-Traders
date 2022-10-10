import { ICustomerItemDocument } from './customerItem.types';

export async function setLastUpdated(this: ICustomerItemDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}