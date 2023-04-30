import { ProductRemoteDataSource } from '@data/datasources/product/index.remote';
import { ProductRepository } from '@domain/repositories/product';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import { mock } from 'jest-mock-extended';
import { ProductEntity } from '@domain/types/entities/product';
import { ProductUpdateRequest } from '@domain/types/requests/product/update';

describe('ProductRepositoryImpl', () => {
  let container: Container;
  let productRepository: ProductRepository;
  let productRemoteDataSource: ProductRemoteDataSource;
  beforeAll(() => {
    container = getTestContainer();
    productRemoteDataSource = container.get(ProductRemoteDataSource);
    productRepository = container.get(ProductRepository);
  });
  it('should be defined', () => {
    expect(productRepository).toBeDefined();
  });
  it('should be able to call all', async () => {
    const spy = jest.spyOn(productRemoteDataSource, 'all');
    spy.mockResolvedValue(mock<ProductEntity[]>());
    await productRepository.all();
    expect(spy).toHaveBeenCalled();
  });
  it('should be able to call create', async () => {
    const spy = jest.spyOn(productRemoteDataSource, 'create');
    spy.mockResolvedValue(mock<ProductEntity>());
    await productRepository.create();
    expect(spy).toHaveBeenCalled();
  });
  it('should be able to call delete', async () => {
    const spy = jest.spyOn(productRemoteDataSource, 'delete');
    spy.mockResolvedValue(mock<void>());
    const id = 1;
    await productRepository.delete(id);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(id);
  });
  it('should be able to call get', async () => {
    const spy = jest.spyOn(productRemoteDataSource, 'get');
    spy.mockResolvedValue(mock<ProductEntity>());
    const id = 1;
    await productRepository.get(id);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(id);
  });
  it('should be able to call update', async () => {
    const spy = jest.spyOn(productRemoteDataSource, 'update');
    spy.mockResolvedValue(mock<ProductEntity>());
    const request = {
      id: 1,
      name: 'name',
    } as ProductUpdateRequest;
    await productRepository.update(request);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(request);
  });
});
