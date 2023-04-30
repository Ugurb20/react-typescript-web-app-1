import { ProductRepository } from '@domain/repositories/product';
import { Container } from 'inversify';
import { ProductUpdateUseCase } from '@domain/usecases/product/update';
import { ProductEntity } from '@domain/types/entities/product';
import { mock } from 'jest-mock-extended';
import { ProductUpdateRequest } from '@domain/types/requests/product/update';
import { getTestContainer } from '@common/inversion-container-test';

describe('ProductUpdateUseCase', () => {
  let container: Container;
  let productRepository: ProductRepository;
  let productUpdateUseCase: ProductUpdateUseCase;
  beforeAll(() => {
    container = getTestContainer();
    productRepository = container.get(ProductRepository);
    productUpdateUseCase = container.get(ProductUpdateUseCase);
  });
  it('should be defined', () => {
    expect(productUpdateUseCase).toBeDefined();
  });
  it('should be able to update a product', () => {
    const spy = jest.spyOn(productRepository, 'update');
    spy.mockResolvedValue(mock<ProductEntity>());
    const request = {
      id: 1,
      name: 'name',
    } as ProductUpdateRequest;
    productUpdateUseCase.call(request);
    expect(spy).toBeCalledWith(request);
    expect(spy).toBeCalledTimes(1);
  });
});
