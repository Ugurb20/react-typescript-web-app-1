import { inject, injectable } from 'inversify';
import { UseCase } from '@common/use-case';
import { ProductUpdateRequest } from '@domain/types/requests/product/update';
import { ProductEntity } from '@domain/types/entities/product';
import { ProductRepository } from '@domain/repositories/product';

@injectable()
export class ProductUpdateUseCase
implements UseCase<ProductUpdateRequest, Promise<ProductEntity>>
{
	constructor(
    @inject(ProductRepository)
    private readonly productRepository: ProductRepository
	) {}

	call(request: ProductUpdateRequest): Promise<ProductEntity> {
		return this.productRepository.update(request);
	}
}
