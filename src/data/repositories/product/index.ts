import { inject, injectable } from 'inversify';
import { ProductRepository } from '@domain/repositories/product';
import { ProductRemoteDataSource } from '@data/datasources/product/index.remote';
import { ProductEntity } from '@domain/types/entities/product';
import { ProductUpdateRequest } from '@domain/types/requests/product/update';

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @inject(ProductRemoteDataSource)
    private readonly productRemoteDataSource: ProductRemoteDataSource
  ) {}

  all(): Promise<ProductEntity[]> {
    return this.productRemoteDataSource.all();
  }

  create(): Promise<ProductEntity> {
    return this.productRemoteDataSource.create();
  }

  delete(id: number): Promise<void> {
    return this.productRemoteDataSource.delete(id);
  }

  get(id: number): Promise<ProductEntity> {
    return this.productRemoteDataSource.get(id);
  }

  update(request: ProductUpdateRequest): Promise<ProductEntity> {
    return this.productRemoteDataSource.update(request);
  }
}
