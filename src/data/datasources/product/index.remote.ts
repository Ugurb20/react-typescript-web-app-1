import { injectable } from 'inversify';
import { ProductEntity } from '@domain/types/entities/product';
import { ProductUpdateRequest } from '@domain/types/requests/product/update';
import { RemoteDataSource } from '@data/remote-data-source';

@injectable()
export abstract class ProductRemoteDataSource extends RemoteDataSource {
  abstract create(): Promise<ProductEntity>;

  abstract delete(id: number): Promise<void>;

  abstract get(id: number): Promise<ProductEntity>;

  abstract update(request: ProductUpdateRequest): Promise<ProductEntity>;

  abstract all(): Promise<ProductEntity[]>;
}
