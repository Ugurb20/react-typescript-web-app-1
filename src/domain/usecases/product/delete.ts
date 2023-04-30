import { UseCase } from '@common/use-case';
import { inject, injectable } from 'inversify';
import { ProductRepository } from '@domain/repositories/product';

@injectable()
export class ProductDeleteUseCase implements UseCase<number, void> {
  constructor(
    @inject(ProductRepository)
    private readonly productRepository: ProductRepository
  ) {}

  call(id: number): void {
    this.productRepository.delete(id);
  }
}
