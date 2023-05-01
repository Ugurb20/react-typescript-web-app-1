import { injectable } from 'inversify';
import { ProductEntity } from '@domain/types/entities/product';
import { ProductUpdateRequest } from '@domain/types/requests/product/update';
import { Repository } from '@domain/repositories/repository';

@injectable()
export abstract class ProductRepository extends Repository {
  abstract create(): Promise<ProductEntity>;

  abstract delete(id: number): Promise<void>;

  abstract get(id: number): Promise<ProductEntity>;

  abstract update(request: ProductUpdateRequest): Promise<ProductEntity>;

  abstract all(): Promise<ProductEntity[]>;
}
