import { AppointmentRemoteDataSource } from '@data/datasources/appointment/index.remote';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { mock } from 'jest-mock-extended';
import mockAxios from 'jest-mock-axios';
import { AppointmentCreateRequest } from '@domain/types/requests/appointment/create';
import { PaginationResponse } from '@domain/types/common/pagination-response';
import { AppointmentQueryRequest } from '@domain/types/requests/appointment/filter';

describe('AppointmentRemoteDataSourceImpl', () => {
  let container: Container;
  let appointmentRemoteDataSource: AppointmentRemoteDataSource;
  beforeAll(() => {
    container = getTestContainer();
    appointmentRemoteDataSource = container.get<AppointmentRemoteDataSource>(
      AppointmentRemoteDataSource
    );
  });
  it('should be defined', () => {
    expect(appointmentRemoteDataSource).toBeDefined();
  });
  it('should call create http client', async () => {
    mockAxios.post.mockResolvedValueOnce({ data: mock<AppointmentEntity>() });
    const appointmentCreateRequest = mock<AppointmentCreateRequest>();
    const response = await appointmentRemoteDataSource.create(
      appointmentCreateRequest
    );
    expect(response).toBeDefined();
    expect(mockAxios.post).toHaveBeenCalledWith(
      '/api/schedule/appointment',
      appointmentCreateRequest,
      undefined
    );
  });
  it('should call filter http client', async () => {
    mockAxios.get.mockResolvedValueOnce({
      data: mock<PaginationResponse<AppointmentEntity>>(),
    });
    const appointmentFilterRequest = {
      branch: 1,
    };
    const response = await appointmentRemoteDataSource.query(
      appointmentFilterRequest
    );
    expect(response).toBeDefined();
    expect(mockAxios.get).toHaveBeenCalledWith('/api/schedule/appointments', {
      params: appointmentFilterRequest,
    });
  });
  it('should call get http client', async () => {
    mockAxios.get.mockResolvedValueOnce({ data: mock<AppointmentEntity>() });
    const id = 1;
    const response = await appointmentRemoteDataSource.get(id);
    expect(response).toBeDefined();
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/api/schedule/appointment/${id}`,
      undefined
    );
  });
  it('should call patch http client', async () => {
    mockAxios.patch.mockResolvedValueOnce({ data: mock<AppointmentEntity>() });
    const appointmentEntity = mock<Partial<AppointmentEntity>>();
    const { id, ...rest } = appointmentEntity;
    const response = await appointmentRemoteDataSource.patch(appointmentEntity);
    expect(response).toBeDefined();
    expect(mockAxios.patch).toHaveBeenCalledWith(
      `/api/schedule/appointment/${id}`,
      rest,
      undefined
    );
  });
});
