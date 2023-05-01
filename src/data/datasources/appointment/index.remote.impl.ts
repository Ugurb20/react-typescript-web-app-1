import { inject, injectable } from 'inversify';
import { HttpClientSymbol } from '@domain/types/symbols';
import { HttpClient } from '@common/http-client';
import { AppointmentRemoteDataSource } from '@data/datasources/appointment/index.remote';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { AppointmentCreateRequest } from '@domain/types/requests/appointment/create';
import { AppointmentQueryRequest } from '@domain/types/requests/appointment/filter';
import { PaginationResponse } from '@domain/types/common/pagination-response';

@injectable()
export class AppointmentRemoteDataSourceImpl
implements AppointmentRemoteDataSource
{
	constructor(
    @inject(HttpClientSymbol) private readonly httpClient: HttpClient
	) {}

	async create(request: AppointmentCreateRequest): Promise<AppointmentEntity> {
		const response = await this.httpClient.post<
      AppointmentCreateRequest,
      AppointmentEntity
    >('/api/schedule/appointment', request);
		return response.data as AppointmentEntity;
	}

	async query(
		request: AppointmentQueryRequest
	): Promise<PaginationResponse<AppointmentEntity>> {
		const response = await this.httpClient.get<
      PaginationResponse<AppointmentEntity>
    >('/api/schedule/appointments', {
    	params: request,
    });
		return response.data as PaginationResponse<AppointmentEntity>;
	}

	async get(id: number): Promise<AppointmentEntity> {
		const response = await this.httpClient.get<AppointmentEntity>(
			`/api/schedule/appointment/${id}`
		);
		return response.data as AppointmentEntity;
	}

	async patch(request: Partial<AppointmentEntity>): Promise<AppointmentEntity> {
		const { id, ...rest } = request;
		const response = await this.httpClient.patch<
      Partial<AppointmentEntity>,
      AppointmentEntity
    >(`/api/schedule/appointment/${id}`, rest);
		return response.data as AppointmentEntity;
	}
}
