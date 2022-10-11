import { IStockItemDocument } from './stockItem.types';

export async function setLastUpdated(this: IStockItemDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
