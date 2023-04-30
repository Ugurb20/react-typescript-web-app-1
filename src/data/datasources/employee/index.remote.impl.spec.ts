import { EmployeeRemoteDataSource } from '@data/datasources/employee/index.remote';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import mockAxios from 'jest-mock-axios';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { mock } from 'jest-mock-extended';
import { EmployeeUpdateRequest } from '@domain/types/requests/employee/update';
/* eslint-disable sonarjs/no-duplicate-string */
describe('EmployeeRemoteDataSourceImpl', () => {
  let container: Container;
  let employeeRemoteDataSource: EmployeeRemoteDataSource;
  beforeAll(() => {
    container = getTestContainer();
    employeeRemoteDataSource = container.get<EmployeeRemoteDataSource>(
      EmployeeRemoteDataSource
    );
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should be defined', () => {
    expect(employeeRemoteDataSource).toBeDefined();
  });
  it('should send post request when create is called.', async () => {
    const mockResponse = mock<EmployeeEntity>();
    mockAxios.post.mockResolvedValueOnce(mockResponse);
    await employeeRemoteDataSource.create();
    expect(mockAxios.post).toHaveBeenCalledWith(
      '/api/employee',
      undefined,
      undefined
    );
    expect(mockAxios.post).toBeCalledTimes(1);
  });
  it('should send delete request when delete is called.', async () => {
    mockAxios.delete.mockResolvedValueOnce(null);
    await employeeRemoteDataSource.delete(1);
    expect(mockAxios.delete).toHaveBeenCalledWith('/api/employee/1', undefined);
    expect(mockAxios.delete).toBeCalledTimes(1);
  });
  it('should send get request when get is called.', async () => {
    const mockResponse = mock<EmployeeEntity>();
    mockAxios.get.mockResolvedValueOnce(mockResponse);
    await employeeRemoteDataSource.get(1);
    expect(mockAxios.get).toHaveBeenCalledWith('/api/employee/1', undefined);
    expect(mockAxios.get).toBeCalledTimes(1);
  });
  it('should send get request when groomers is called.', async () => {
    const mockResponse = mock<EmployeeEntity[]>();
    mockAxios.get.mockResolvedValueOnce(mockResponse);
    await employeeRemoteDataSource.groomers();
    expect(mockAxios.get).toHaveBeenCalledWith(
      '/api/employee/groomers',
      undefined
    );
    expect(mockAxios.get).toBeCalledTimes(1);
  });
  it('should send patch request when update is called.', async () => {
    const mockResponse = mock<EmployeeEntity>();
    mockAxios.patch.mockResolvedValueOnce(mockResponse);
    const params = {
      id: 1,
      name: 'name',
    } as EmployeeUpdateRequest;
    await employeeRemoteDataSource.update(params);
    expect(mockAxios.patch).toHaveBeenCalledWith(
      '/api/employee/1',
      { name: 'name' },
      undefined
    );
    expect(mockAxios.patch).toBeCalledTimes(1);
  });
});
