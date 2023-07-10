import { getTestContainer } from '@common/inversion-container-test';
import { AppointmentRemoteDataSource } from '@data/datasources/appointment/index.remote';
import { AppointmentRepository } from '@domain/repositories/appointment';
import { Container } from 'inversify';
import { mock } from 'jest-mock-extended';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { AppointmentCreateRequest } from '@domain/types/requests/appointment/create';
import { PaginationResponse } from '@domain/types/common/pagination-response';

describe('AppointmentRepositoryImpl', () => {
	let appointmentRepository: AppointmentRepository;
	let container: Container;
	let appointmentRemoteDataSource: AppointmentRemoteDataSource;
	beforeAll(() => {
		container = getTestContainer();
		appointmentRepository = container.get<AppointmentRepository>(
			AppointmentRepository
		);
		appointmentRemoteDataSource = container.get<AppointmentRemoteDataSource>(
			AppointmentRemoteDataSource
		);
	});
	it('should be defined', () => {
		expect(appointmentRepository).toBeDefined();
	});
	it('should call appointmentRemoteDataSource.create', async () => {
		const spy = jest.spyOn(appointmentRemoteDataSource, 'create');
		const request = mock<AppointmentCreateRequest>();
		const response = mock<AppointmentEntity>();
		spy.mockResolvedValueOnce(response);
		await appointmentRepository.create(request);
		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith(request);
	});
	it('should call appointmentRemoteDataSource.filter', async () => {
		const spy = jest.spyOn(appointmentRemoteDataSource, 'query');
		const request = mock<AppointmentCreateRequest>();
		const response = mock<PaginationResponse<AppointmentEntity>>();
		spy.mockResolvedValueOnce(response);
		await appointmentRepository.query(request);
		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith(request);
	});
	it('should call appointmentRemoteDataSource.get', async () => {
		const spy = jest.spyOn(appointmentRemoteDataSource, 'get');
		const response = mock<AppointmentEntity>();
		const id = 1;
		spy.mockResolvedValueOnce(response);
		await appointmentRepository.get(id);
		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith(id);
	});
	it('should call appointmentRemoteDataSource.patch', async () => {
		const spy = jest.spyOn(appointmentRemoteDataSource, 'patch');
		const response = mock<AppointmentEntity>();
		const request = mock<Partial<AppointmentEntity>>();
		spy.mockResolvedValueOnce(response);
		await appointmentRepository.patch(request);
		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith(request);
	});
});
