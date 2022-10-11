import { ICategoryDocument } from './category.types';

export async function setLastUpdated(this: ICategoryDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
