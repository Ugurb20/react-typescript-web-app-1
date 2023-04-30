import { EmployeeGroomersUseCase } from '@domain/usecases/employee/groomers';
import { Container } from 'inversify';
import { EmployeeRepository } from '@domain/repositories/employee';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { mock } from 'jest-mock-extended';
import { getTestContainer } from '@common/inversion-container-test';

describe('EmployeeGroomersUseCase', () => {
  let container: Container;
  let employeeRepository: EmployeeRepository;
  let employeeGroomersUseCase: EmployeeGroomersUseCase;
  beforeAll(() => {
    container = getTestContainer();
    employeeRepository = container.get<EmployeeRepository>(EmployeeRepository);
    employeeGroomersUseCase = container.get<EmployeeGroomersUseCase>(
      EmployeeGroomersUseCase
    );
  });
  it('should be defined', () => {
    expect(EmployeeGroomersUseCase).toBeDefined();
  });
  it('should call employeeRepository.groomers', async () => {
    const spy = jest.spyOn(employeeRepository, 'groomers');
    spy.mockResolvedValue(mock<EmployeeEntity[]>());
    await employeeGroomersUseCase.call();
    expect(spy).toBeCalled();
  });
});
