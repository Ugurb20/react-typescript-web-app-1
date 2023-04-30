import { BranchRemoteDataSource } from '@data/datasources/branch/index.remote';
import { BranchRepository } from '@domain/repositories/branch';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import { BranchEntity } from '@domain/types/entities/branch';
import { mock } from 'jest-mock-extended';

describe('BranchRepositoryImpl', () => {
  let container: Container;
  let branchRepository: BranchRepository;
  let branchRemoteDataSource: BranchRemoteDataSource;
  const dailyInformationRequest = { id: 1, date: '2021-01-01' };
  beforeAll(() => {
    container = getTestContainer();
    branchRepository = container.get<BranchRepository>(BranchRepository);
    branchRemoteDataSource = container.get<BranchRemoteDataSource>(
      BranchRemoteDataSource
    );
  });
  it('should be defined', () => {
    expect(branchRepository).toBeDefined();
  });
  it('should call dailyEmployees', async () => {
    const spy = jest.spyOn(branchRemoteDataSource, 'dailyEmployees');
    spy.mockResolvedValue([]);
    await branchRepository.dailyEmployees(dailyInformationRequest);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(dailyInformationRequest);
  });
  it('should call dailyInformation', async () => {
    const spy = jest.spyOn(branchRemoteDataSource, 'dailyInformation');
    spy.mockResolvedValue({ employees: [], appointments: [] });
    await branchRepository.dailyInformation(dailyInformationRequest);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(dailyInformationRequest);
  });
  it('should call delete', async () => {
    const spy = jest.spyOn(branchRemoteDataSource, 'delete');
    spy.mockResolvedValue();
    await branchRepository.delete(1);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(1);
  });
  it('should call get', async () => {
    const spy = jest.spyOn(branchRemoteDataSource, 'get');
    spy.mockResolvedValue(mock<BranchEntity>());
    await branchRepository.get(1);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(1);
  });
  it('should call getAll', async () => {
    const spy = jest.spyOn(branchRemoteDataSource, 'getAll');
    spy.mockResolvedValue([]);
    await branchRepository.getAll();
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith();
  });
  it('should call update', async () => {
    const spy = jest.spyOn(branchRemoteDataSource, 'update');
    spy.mockResolvedValue(mock<BranchEntity>());
    await branchRepository.update({ id: 1, name: 'name' });
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith({ id: 1, name: 'name' });
  });
  it('should call create', async () => {
    const spy = jest.spyOn(branchRemoteDataSource, 'create');
    spy.mockResolvedValue(mock<BranchEntity>());
    await branchRepository.create();
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith();
  });
});
