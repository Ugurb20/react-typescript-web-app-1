import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import { ProductGetUseCase } from '@domain/usecases/product/get';
import { ProductRepository } from '@domain/repositories/product';
import { ProductEntity } from '@domain/types/entities/product';
import { mock } from 'jest-mock-extended';

describe('ProductGetUseCase', () => {
  let container: Container;
  let productRepository: ProductRepository;
  let productGetUseCase: ProductGetUseCase;
  beforeAll(() => {
    container = getTestContainer();
    productRepository = container.get(ProductRepository);
    productGetUseCase = container.get(ProductGetUseCase);
  });
  it('should be defined', () => {
    expect(productGetUseCase).toBeDefined();
  });
  it('should be able to get a product', () => {
    const id = 1;
    const spy = jest.spyOn(productRepository, 'get');
    spy.mockResolvedValue(mock<ProductEntity>());
    productGetUseCase.call(id);
    expect(spy).toBeCalledWith(id);
  });
});
