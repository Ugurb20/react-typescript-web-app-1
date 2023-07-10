import { Container } from 'inversify';
import { AppointmentRepository } from '@domain/repositories/appointment';
import { AppointmentFilterUseCase } from '@domain/usecases/appointment/filter';
import { getTestContainer } from '@common/inversion-container-test';
import { AppointmentQueryRequest } from '@domain/types/requests/appointment/filter';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { PaginationResponse } from '@domain/types/common/pagination-response';
import { mock } from 'jest-mock-extended';

describe('AppointmentFilterUseCase', () => {
	let container: Container;
	let appointmentRepository: AppointmentRepository;
	let appointmentFilterUseCase: AppointmentFilterUseCase;
	beforeAll(() => {
		container = getTestContainer();
		appointmentRepository = container.get<AppointmentRepository>(
			AppointmentRepository
		);
		appointmentFilterUseCase = container.get<AppointmentFilterUseCase>(
			AppointmentFilterUseCase
		);
	});
	it('should be defined', () => {
		expect(appointmentFilterUseCase).toBeDefined();
	});
	it('should call appointmentRepository.filter', async () => {
		const spy = jest.spyOn(appointmentRepository, 'query');
		const request = mock<AppointmentQueryRequest>();
		const response = mock<PaginationResponse<AppointmentEntity>>();
		spy.mockResolvedValueOnce(response);
		await appointmentFilterUseCase.call(request);
		expect(appointmentRepository.query).toBeCalledWith(request);
	});
});
