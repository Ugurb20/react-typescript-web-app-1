import { AppointmentRepository } from '@domain/repositories/appointment';
import { inject, injectable } from 'inversify';
import { AppointmentRemoteDataSource } from '@data/datasources/appointment/index.remote';
import { AppointmentCreateRequest } from '@domain/types/requests/appointment/create';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { PaginationResponse } from '@domain/types/common/pagination-response';
import { AppointmentQueryRequest } from '@domain/types/requests/appointment/filter';

@injectable()
export class AppointmentRepositoryImpl extends AppointmentRepository {
	constructor(
    @inject(AppointmentRemoteDataSource)
    private readonly appointmentRemoteDataSource: AppointmentRemoteDataSource
	) {
		super();
	}

	async create(request: AppointmentCreateRequest): Promise<AppointmentEntity> {
		return this.appointmentRemoteDataSource.create(request);
	}

	async query(
		request: AppointmentQueryRequest
	): Promise<PaginationResponse<AppointmentEntity>> {
		return this.appointmentRemoteDataSource.query(request);
	}

	async get(id: number): Promise<AppointmentEntity> {
		return this.appointmentRemoteDataSource.get(id);
	}

	async patch(request: Partial<AppointmentEntity>): Promise<AppointmentEntity> {
		return this.appointmentRemoteDataSource.patch(request);
	}
}
