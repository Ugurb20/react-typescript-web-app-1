import { getTestContainer } from '@common/inversion-container-test';
import { EmployeeRepository } from '@domain/repositories/employee';
import { EmployeeCreateUseCase } from '@domain/usecases/employee/create';
import { Container } from 'inversify';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { mock } from 'jest-mock-extended';

describe('EmployeeCreateUseCase', () => {
  let container: Container;
  let employeeRepository: EmployeeRepository;
  let employeeCreateUseCase: EmployeeCreateUseCase;
  beforeAll(() => {
    container = getTestContainer();
    employeeRepository = container.get<EmployeeRepository>(EmployeeRepository);
    employeeCreateUseCase = container.get<EmployeeCreateUseCase>(
      EmployeeCreateUseCase
    );
  });
  it('should be defined', () => {
    expect(employeeCreateUseCase).toBeDefined();
  });
  it('should call employeeRepository.create', async () => {
    const spy = jest.spyOn(employeeRepository, 'create');
    spy.mockResolvedValue(mock<EmployeeEntity>());
    await employeeCreateUseCase.call();
    expect(spy).toHaveBeenCalled();
  });
});
