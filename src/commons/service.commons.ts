import { Repository } from 'typeorm';

export abstract class BaseService<T> {
  abstract getRepository(): Repository<T>;

  findAll(): Promise<T[]> {
    return this.getRepository().find();
  }

  save(entity: T): Promise<T> {
    return this.getRepository().save(entity);
  }

  async findOneMonumento(id: any) {
    return await this.getRepository().findOneBy(id);
  }

  async deleteMonumento(id: any) {
    return await this.getRepository().delete(id);
  }

  async upDateMonumento(id: number, monumento: any) {
    await this.getRepository().update(id, monumento);
  }
}
