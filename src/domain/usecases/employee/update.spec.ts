import { EmployeeRepository } from '@domain/repositories/employee';
import { Container } from 'inversify';
import { EmployeeUpdateUseCase } from '@domain/usecases/employee/update';
import { getTestContainer } from '@common/inversion-container-test';
import { EmployeeUpdateRequest } from '@domain/types/requests/employee/update';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { mock } from 'jest-mock-extended';

describe('EmployeeUpdateUseCase', () => {
  let container: Container;
  let employeeRepository: EmployeeRepository;
  let employeeUpdateUseCase: EmployeeUpdateUseCase;
  beforeAll(() => {
    container = getTestContainer();
    employeeRepository = container.get<EmployeeRepository>(EmployeeRepository);
    employeeUpdateUseCase = container.get<EmployeeUpdateUseCase>(
      EmployeeUpdateUseCase
    );
  });
  it('should be defined', () => {
    expect(EmployeeUpdateUseCase).toBeDefined();
  });
  it('should call employeeRepository.update', async () => {
    const spy = jest.spyOn(employeeRepository, 'update');
    spy.mockResolvedValue(mock<EmployeeEntity>());
    const request = {
      id: 1,
      name: 'name',
    } as EmployeeUpdateRequest;
    await employeeUpdateUseCase.call(request);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(request);
  });
});
