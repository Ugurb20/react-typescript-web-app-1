import { inject, injectable } from 'inversify';
import { ProductRemoteDataSource } from '@data/datasources/product/index.remote';
import { ProductEntity } from '@domain/types/entities/product';
import { HttpClient } from '@common/http-client';
import { ProductUpdateRequest } from '@domain/types/requests/product/update';
import { HttpClientSymbol } from '@domain/types/symbols';

@injectable()
export class ProductRemoteDataSourceImpl implements ProductRemoteDataSource {
	constructor(
    @inject(HttpClientSymbol) private readonly httpClient: HttpClient
	) {}

	async all(): Promise<ProductEntity[]> {
		const response = await this.httpClient.get<ProductEntity[]>(
			'/api/products/all'
		);
		return response.data as ProductEntity[];
	}

	async create(): Promise<ProductEntity> {
		const response = await this.httpClient.post<ProductEntity>('/api/product');
		return response.data as ProductEntity;
	}

	async delete(id: number): Promise<void> {
		await this.httpClient.delete(`/product/${id}`);
	}

	async get(id: number): Promise<ProductEntity> {
		const response = await this.httpClient.get<ProductEntity>(
			`/api/product/${id}`
		);
		return response.data as ProductEntity;
	}

	async update(request: ProductUpdateRequest): Promise<ProductEntity> {
		const { id, ...rest } = request;
		const response = await this.httpClient.patch<
      Partial<ProductUpdateRequest>,
      ProductEntity
    >(`/api/product/${id}`, rest);
		return response.data as ProductEntity;
	}
}
