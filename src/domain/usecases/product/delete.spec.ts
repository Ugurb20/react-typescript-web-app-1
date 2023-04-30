import { ProductRepository } from '@domain/repositories/product';
import { Container } from 'inversify';
import { ProductDeleteUseCase } from '@domain/usecases/product/delete';
import { getTestContainer } from '@common/inversion-container-test';

describe('ProductDeleteUseCase', () => {
  let container: Container;
  let productRepository: ProductRepository;
  let productDeleteUseCase: ProductDeleteUseCase;

  beforeAll(() => {
    container = getTestContainer();
    productRepository = container.get(ProductRepository);
    productDeleteUseCase = container.get(ProductDeleteUseCase);
  });
  it('should be defined', () => {
    expect(productDeleteUseCase).toBeDefined();
  });
  it('should be able to delete a product', () => {
    const id = 1;
    const spy = jest.spyOn(productRepository, 'delete');
    spy.mockResolvedValue(undefined);
    productDeleteUseCase.call(id);
    expect(spy).toBeCalledWith(id);
  });
});
