import { injectable } from 'inversify';
import { ProductEntity } from '@domain/types/entities/product';
import { ProductUpdateRequest } from '@domain/types/requests/product/update';

@injectable()
export abstract class ProductRemoteDataSource {
  abstract create(): Promise<ProductEntity>;
  abstract delete(id: number): Promise<void>;
  abstract get(id: number): Promise<ProductEntity>;
  abstract update(request: ProductUpdateRequest): Promise<ProductEntity>;
  abstract all(): Promise<ProductEntity[]>;
}
