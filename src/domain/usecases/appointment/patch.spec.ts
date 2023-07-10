import { AppointmentRepository } from '@domain/repositories/appointment';
import { Container } from 'inversify';
import { AppointmentPatchUseCase } from '@domain/usecases/appointment/patch';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { mock } from 'jest-mock-extended';
import { getTestContainer } from '@common/inversion-container-test';

describe('AppointmentPatchUseCase', () => {
	let container: Container;
	let appointmentRepository: AppointmentRepository;
	let appointmentPatchUseCase: AppointmentPatchUseCase;
	beforeAll(() => {
		container = getTestContainer();
		appointmentRepository = container.get<AppointmentRepository>(
			AppointmentRepository
		);
		appointmentPatchUseCase = container.get<AppointmentPatchUseCase>(
			AppointmentPatchUseCase
		);
	});
	it('should be defined', () => {
		expect(appointmentPatchUseCase).toBeDefined();
	});
	it('should call appointmentRepository.patch', async () => {
		const spy = jest.spyOn(appointmentRepository, 'patch');
		const request = mock<Partial<AppointmentEntity>>();
		const response = mock<AppointmentEntity>();
		spy.mockResolvedValueOnce(response);
		await appointmentPatchUseCase.call(request);
		expect(appointmentRepository.patch).toBeCalledWith(request);
	});
});
