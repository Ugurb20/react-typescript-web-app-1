import { Container } from 'inversify';
import { EmployeeRepository } from '@domain/repositories/employee';
import { EmployeeGetUseCase } from '@domain/usecases/employee/get';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { mock } from 'jest-mock-extended';
import { getTestContainer } from '@common/inversion-container-test';

describe('EmployeeGetUseCase', () => {
  let container: Container;
  let employeeRepository: EmployeeRepository;
  let employeeGetUseCase: EmployeeGetUseCase;
  beforeAll(() => {
    container = getTestContainer();
    employeeRepository = container.get<EmployeeRepository>(EmployeeRepository);
    employeeGetUseCase = container.get<EmployeeGetUseCase>(EmployeeGetUseCase);
  });
  it('should be defined', () => {
    expect(EmployeeGetUseCase).toBeDefined();
  });
  it('should call employeeRepository.get', async () => {
    const spy = jest.spyOn(employeeRepository, 'get');
    spy.mockResolvedValue(mock<EmployeeEntity>());
    await employeeGetUseCase.call(1);
    expect(spy).toBeCalled();
  });
});
