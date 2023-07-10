import { inject, injectable } from 'inversify';
import { ProductRepository } from '@domain/repositories/product';
import { UseCase } from '@common/use-case';
import { ProductEntity } from '@domain/types/entities/product';

@injectable()
export class ProductGetUseCase
implements UseCase<number, Promise<ProductEntity>>
{
	constructor(
    @inject(ProductRepository)
    private readonly productRepository: ProductRepository
	) {}

	call(id: number): Promise<ProductEntity> {
		return this.productRepository.get(id);
	}
}
