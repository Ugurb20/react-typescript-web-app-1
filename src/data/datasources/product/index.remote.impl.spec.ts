import { ProductRemoteDataSource } from '@data/datasources/product/index.remote';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import mockAxios from 'jest-mock-axios';
import { ProductEntity } from '@domain/types/entities/product';
import { mock } from 'jest-mock-extended';
import { ProductUpdateRequest } from '@domain/types/requests/product/update';

describe('ProductRemoteDataSourceImpl', () => {
  let container: Container;
  let productRemoteDataSource: ProductRemoteDataSource;
  beforeAll(() => {
    container = getTestContainer();
    productRemoteDataSource = container.get<ProductRemoteDataSource>(
      ProductRemoteDataSource
    );
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should be defined', () => {
    expect(productRemoteDataSource).toBeDefined();
  });
  it('all should call httpClient.get', async () => {
    const mockResponse = mock<ProductEntity[]>();
    mockAxios.get.mockResolvedValueOnce({ data: mockResponse });
    const response = await productRemoteDataSource.all();
    expect(response).toBe(mockResponse);
    expect(mockAxios.get).toHaveBeenCalledWith('/api/products/all', undefined);
  });
  it('create should call httpClient.post', async () => {
    const mockResponse = mock<ProductEntity>();
    mockAxios.post.mockResolvedValueOnce({ data: mockResponse });
    const response = await productRemoteDataSource.create();
    expect(response).toBe(mockResponse);
    expect(mockAxios.post).toHaveBeenCalledWith(
      '/api/product',
      undefined,
      undefined
    );
  });
  it('delete should call httpClient.delete', async () => {
    const id = 1;
    mockAxios.delete.mockResolvedValueOnce({});
    await productRemoteDataSource.delete(id);
    expect(mockAxios.delete).toHaveBeenCalledWith(`/product/${id}`, undefined);
  });
  it('get should call httpClient.get', async () => {
    const id = 1;
    const mockResponse = mock<ProductEntity>();
    mockAxios.get.mockResolvedValueOnce({ data: mockResponse });
    const response = await productRemoteDataSource.get(id);
    expect(response).toBe(mockResponse);
    expect(mockAxios.get).toHaveBeenCalledWith(`/api/product/${id}`, undefined);
  });
  it('update should call httpClient.patch', async () => {
    const mockResponse = mock<ProductEntity>();
    const request = {
      id: 1,
      name: 'name',
    } as ProductUpdateRequest;
    const { id, ...rest } = request;
    mockAxios.patch.mockResolvedValueOnce({ data: mockResponse });
    const response = await productRemoteDataSource.update(request);
    expect(response).toBe(mockResponse);
    expect(mockAxios.patch).toHaveBeenCalledWith(
      `/api/product/${id}`,
      rest,
      undefined
    );
  });
});
