import { inject, injectable } from 'inversify';
import { ProductEntity } from '@domain/types/entities/product';
import { UseCase } from '@common/use-case';
import { ProductRepository } from '@domain/repositories/product';

@injectable()
export class ProductCreateUseCase
implements UseCase<void, Promise<ProductEntity>>
{
	constructor(
    @inject(ProductRepository)
    private readonly productRepository: ProductRepository
	) {}

	call(): Promise<ProductEntity> {
		return this.productRepository.create();
	}
}
