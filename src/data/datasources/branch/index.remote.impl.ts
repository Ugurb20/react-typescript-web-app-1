import { inject, injectable } from 'inversify';
import { BranchRemoteDataSource } from '@data/datasources/branch/index.remote';
import {
	HttpClientCachedSymbol,
	HttpClientSymbol,
} from '@domain/types/symbols';
import { HttpClient } from '@common/http-client';
import { BranchEntity } from '@domain/types/entities/branch';
import { BranchDailyInformationRequest } from '@domain/types/requests/branch/daily';
import { BranchDailyInformationResponse } from '@domain/types/responses/branch/daily-information';
import { BranchUpdateRequest } from '@domain/types/requests/branch/update';
import { EmployeeEntity } from '@domain/types/entities/employee';

@injectable()
export class BranchRemoteDataSourceImpl implements BranchRemoteDataSource {
	constructor(
    @inject(HttpClientSymbol) private readonly httpClient: HttpClient,
    @inject(HttpClientCachedSymbol)
    private readonly httpClientCached: HttpClient
	) {}

	async create(): Promise<BranchEntity> {
		const response = await this.httpClient.post<void, BranchEntity>(
			'/api/branch'
		);
		return response.data as BranchEntity;
	}

	async dailyInformation(
		request: BranchDailyInformationRequest
	): Promise<BranchDailyInformationResponse> {
		const { date, id } = request;
		const response =
      await this.httpClientCached.get<BranchDailyInformationResponse>(
      	`/api/branch/${id}/daily`,
      	{
      		params: {
      			date,
      		},
      	}
      );
		return response.data as BranchDailyInformationResponse;
	}

	async delete(id: number): Promise<void> {
		await this.httpClient.delete<void>(`/api/branch/${id}`);
	}

	async get(id: number): Promise<BranchEntity> {
		const response = await this.httpClient.get<BranchEntity>(
			`/api/branch/${id}`
		);
		return response.data;
	}

	async getAll(): Promise<BranchEntity[]> {
		const response = await this.httpClient.get<BranchEntity[]>(
			'/api/branches/all'
		);
		return response.data;
	}

	async update(request: BranchUpdateRequest): Promise<BranchEntity> {
		const { id, ...body } = request;
		const response = await this.httpClient.patch<
      Partial<BranchUpdateRequest>,
      BranchEntity
    >(`/api/branch/${id}`, body);
		return response.data as BranchEntity;
	}

	async dailyEmployees(
		request: BranchDailyInformationRequest
	): Promise<EmployeeEntity[]> {
		const { date, id } = request;
		const response = await this.httpClientCached.get<EmployeeEntity[]>(
			`/api/branch/${id}/employees`,
			{
				params: {
					date,
				},
			}
		);
		return response.data as EmployeeEntity[];
	}
}
