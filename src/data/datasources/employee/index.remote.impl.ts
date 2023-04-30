import { inject, injectable } from 'inversify';
import { HttpClient } from '@common/http-client';
import {
	HttpClientCachedSymbol,
	HttpClientSymbol,
} from '@domain/types/symbols';
import { EmployeeRemoteDataSource } from '@data/datasources/employee/index.remote';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { EmployeeUpdateRequest } from '@domain/types/requests/employee/update';

@injectable()
export class EmployeeRemoteDataSourceImpl implements EmployeeRemoteDataSource {
	constructor(
    @inject(HttpClientSymbol) private readonly httpClient: HttpClient,
    @inject(HttpClientCachedSymbol)
    private readonly httpClientCached: HttpClient
	) {}

	async create(): Promise<EmployeeEntity> {
		const response = await this.httpClient.post<void, EmployeeEntity>(
			'/api/employee'
		);
		return response.data as EmployeeEntity;
	}

	async delete(id: number): Promise<void> {
		await this.httpClient.delete<void>(`/api/employee/${id}`);
	}

	async get(id: number): Promise<EmployeeEntity> {
		const response = await this.httpClient.get<EmployeeEntity>(
			`/api/employee/${id}`
		);
		return response.data as EmployeeEntity;
	}

	async groomers(): Promise<EmployeeEntity[]> {
		const response = await this.httpClient.get<EmployeeEntity[]>(
			'/api/employee/groomers'
		);
		return response.data as EmployeeEntity[];
	}

	async update(request: EmployeeUpdateRequest): Promise<EmployeeEntity> {
		const { id, ...rest } = request;
		const response = await this.httpClient.patch<
      Partial<EmployeeUpdateRequest>,
      EmployeeEntity
    >(`/api/employee/${id}`, rest);
		return response.data as EmployeeEntity;
	}
}
