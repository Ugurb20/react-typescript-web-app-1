import { AppointmentCreateRequest } from '@domain/types/requests/appointment/create';
import { mock } from 'jest-mock-extended';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { AppointmentCreateUseCase } from '@domain/usecases/appointment/create';
import { AppointmentRepository } from '@domain/repositories/appointment';
import { getTestContainer } from '@common/inversion-container-test';
import { Container } from 'inversify';

describe('AppointmentCreateUseCase', () => {
	let container: Container;
	let appointmentRepository: AppointmentRepository;
	let appointmentCreateUseCase: AppointmentCreateUseCase;
	beforeAll(() => {
		container = getTestContainer();
		appointmentRepository = container.get<AppointmentRepository>(
			AppointmentRepository
		);
		appointmentCreateUseCase = container.get<AppointmentCreateUseCase>(
			AppointmentCreateUseCase
		);
	});
	it('should be defined', () => {
		expect(appointmentCreateUseCase).toBeDefined();
	});
	it('should call appointmentRepository.create', async () => {
		const spy = jest.spyOn(appointmentRepository, 'create');
		const request = mock<AppointmentCreateRequest>();
		spy.mockResolvedValueOnce(mock<AppointmentEntity>());
		await appointmentCreateUseCase.call(request);
		expect(appointmentRepository.create).toBeCalledWith(request);
	});
});
