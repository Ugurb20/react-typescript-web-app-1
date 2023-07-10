import { getTestContainer } from '@common/inversion-container-test';
import { EmployeeRepository } from '@domain/repositories/employee';
import { EmployeeRemoteDataSource } from '@data/datasources/employee/index.remote';
import { Container } from 'inversify';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { mock } from 'jest-mock-extended';

describe('EmployeeRepository', () => {
	let container: Container;
	let employeeRepository: EmployeeRepository;
	let employeeRemoteDataSource: EmployeeRemoteDataSource;
	beforeAll(() => {
		container = getTestContainer();
		employeeRepository = container.get<EmployeeRepository>(EmployeeRepository);
		employeeRemoteDataSource = container.get<EmployeeRemoteDataSource>(
			EmployeeRemoteDataSource
		);
	});
	it('should be defined', () => {
		expect(employeeRepository).toBeDefined();
	});
	it('should call create on employeeRemoteDataSource', async () => {
		const spy = jest.spyOn(employeeRemoteDataSource, 'create');
		spy.mockResolvedValue(mock<EmployeeEntity>());
		await employeeRepository.create();
		expect(spy).toHaveBeenCalled();
	});
	it('should call delete on employeeRemoteDataSource', async () => {
		const spy = jest.spyOn(employeeRemoteDataSource, 'delete');
		spy.mockResolvedValue();
		await employeeRepository.delete(1);
		expect(spy).toHaveBeenCalled();
	});
	it('should call get on employeeRemoteDataSource', async () => {
		const spy = jest.spyOn(employeeRemoteDataSource, 'get');
		spy.mockResolvedValue(mock<EmployeeEntity>());
		await employeeRepository.get(1);
		expect(spy).toHaveBeenCalled();
	});
	it('should call update on employeeRemoteDataSource', async () => {
		const spy = jest.spyOn(employeeRemoteDataSource, 'update');
		spy.mockResolvedValue(mock<EmployeeEntity>());
		await employeeRepository.update({ id: 1 });
		expect(spy).toHaveBeenCalled();
	});
	it('should call groomers on employeeRemoteDataSource', async () => {
		const spy = jest.spyOn(employeeRemoteDataSource, 'groomers');
		spy.mockResolvedValue(mock<EmployeeEntity[]>());
		await employeeRepository.groomers();
		expect(spy).toHaveBeenCalled();
	});
});
