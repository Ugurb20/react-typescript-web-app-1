/*
import { inject, injectable } from 'inversify';
import { ProductEntity } from '@domain/types/entities/product';
import { UseCase } from '@common/use-case';
import { ProductRepository } from '@domain/repositories/product';

@injectable()
export class ProductGetAllUseCase
  implements UseCase<void, Promise<ProductEntity[]>>
{
  constructor(
    @inject(ProductRepository)
    private readonly productRepository: ProductRepository
  ) {}
  call(): Promise<ProductEntity[]> {
    return this.productRepository.all();
  }
}

 */
import { ProductRepository } from '@domain/repositories/product';
import { Container } from 'inversify';
import { ProductGetAllUseCase } from '@domain/usecases/product/get-all';
import { getTestContainer } from '@common/inversion-container-test';
import { mock } from 'jest-mock-extended';
import { ProductEntity } from '@domain/types/entities/product';

describe('ProductGetAllUseCase', () => {
  let container: Container;
  let productRepository: ProductRepository;
  let productGetAllUseCase: ProductGetAllUseCase;
  beforeAll(() => {
    container = getTestContainer();
    productRepository = container.get(ProductRepository);
    productGetAllUseCase = container.get(ProductGetAllUseCase);
  });
  it('should be defined', () => {
    expect(productGetAllUseCase).toBeDefined();
  });
  it('should be able to get all products', () => {
    const spy = jest.spyOn(productRepository, 'all');
    spy.mockResolvedValue(mock<ProductEntity[]>());
    productGetAllUseCase.call();
    expect(spy).toBeCalled();
  });
});
