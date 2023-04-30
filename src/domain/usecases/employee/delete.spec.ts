import { Container } from 'inversify';
import { EmployeeDeleteUseCase } from '@domain/usecases/employee/delete';
import { EmployeeRepository } from '@domain/repositories/employee';
import { getTestContainer } from '@common/inversion-container-test';

describe('EmployeeDeleteUseCase', () => {
  let container: Container;
  let employeeRepository: EmployeeRepository;
  let employeeDeleteUseCase: EmployeeDeleteUseCase;
  beforeAll(() => {
    container = getTestContainer();
    employeeRepository = container.get<EmployeeRepository>(EmployeeRepository);
    employeeDeleteUseCase = container.get<EmployeeDeleteUseCase>(
      EmployeeDeleteUseCase
    );
  });
  it('should be defined', () => {
    expect(employeeDeleteUseCase).toBeDefined();
  });
  it('should call employeeRepository.delete', async () => {
    const spy = jest.spyOn(employeeRepository, 'delete');
    spy.mockResolvedValue();
    await employeeDeleteUseCase.call(1);
    expect(spy).toHaveBeenCalled();
  });
});
