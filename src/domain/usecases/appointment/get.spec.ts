import { Container } from 'inversify';
import { AppointmentRepository } from '@domain/repositories/appointment';
import { AppointmentGetUseCase } from '@domain/usecases/appointment/get';
import { getTestContainer } from '@common/inversion-container-test';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { mock } from 'jest-mock-extended';

describe('AppointmentGetUseCase', () => {
	let container: Container;
	let appointmentRepository: AppointmentRepository;
	let appointmentGetUseCase: AppointmentGetUseCase;
	beforeAll(() => {
		container = getTestContainer();
		appointmentRepository = container.get<AppointmentRepository>(
			AppointmentRepository
		);
		appointmentGetUseCase = container.get<AppointmentGetUseCase>(
			AppointmentGetUseCase
		);
	});
	it('should be defined', () => {
		expect(appointmentGetUseCase).toBeDefined();
	});
	it('should call appointmentRepository.get', async () => {
		const spy = jest.spyOn(appointmentRepository, 'get');
		spy.mockResolvedValueOnce(mock<AppointmentEntity>());
		await appointmentGetUseCase.call(1);
		expect(appointmentRepository.get).toBeCalledWith(1);
	});
});
