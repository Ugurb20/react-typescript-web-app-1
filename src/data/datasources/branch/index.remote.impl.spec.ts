import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import { BranchRemoteDataSource } from '@data/datasources/branch/index.remote';
import { BranchMockGenerator } from '@test/__mocks__/types/entities/branch';
import mockAxios from 'jest-mock-axios';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { EmployeeMockGenerator } from '@test/__mocks__/types/entities/employee';
import { BranchDailyInformationResponse } from '@domain/types/responses/branch/daily-information';

describe('BranchRemoteDataSource', function () {
	const branchGenerator = new BranchMockGenerator();
	const employeeGenerator = new EmployeeMockGenerator();
	const appointmentGenerator = new AppointmentMockGenerator();
	const branch = branchGenerator.generateOne();
	const branches = branchGenerator.generateMany(10);
	let container: Container;
	let branchRemoteDataSource: BranchRemoteDataSource;
	beforeAll(() => {
		container = getTestContainer();
		branchRemoteDataSource = container.get<BranchRemoteDataSource>(
			BranchRemoteDataSource
		);
	});
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should be defined', () => {
		expect(branchRemoteDataSource).toBeDefined();
	});
	it('create should call httpClient.post', async () => {
		mockAxios.post.mockResolvedValueOnce({ data: branch });
		const response = await branchRemoteDataSource.create();
		expect(response).toEqual(branch);
		expect(mockAxios.post).toHaveBeenCalledTimes(1);
		expect(mockAxios.post).toHaveBeenCalledWith(
			'/api/branch',
			undefined,
			undefined
		);
	});
	it('update should call httpClient.patch', async () => {
		mockAxios.patch.mockResolvedValueOnce({ data: branch });
		const response = await branchRemoteDataSource.update({
			id: branch.id,
			name: branch.name,
		});
		expect(response).toEqual(branch);
		expect(mockAxios.patch).toHaveBeenCalledTimes(1);
		expect(mockAxios.patch).toHaveBeenCalledWith(
			`/api/branch/${branch.id}`,
			{
				name: branch.name,
			},
			undefined
		);
	});
	it('delete should call httpClient.delete', async () => {
		mockAxios.delete.mockResolvedValueOnce({ data: undefined });
		await branchRemoteDataSource.delete(branch.id);
		expect(mockAxios.delete).toHaveBeenCalledTimes(1);
		expect(mockAxios.delete).toHaveBeenCalledWith(
			`/api/branch/${branch.id}`,
			undefined
		);
	});
	it('get should call httpClient.get', async () => {
		mockAxios.get.mockResolvedValueOnce({ data: branch });
		const response = await branchRemoteDataSource.get(branch.id);
		expect(response).toEqual(branch);
		expect(mockAxios.get).toHaveBeenCalledTimes(1);
		expect(mockAxios.get).toHaveBeenCalledWith(
			`/api/branch/${branch.id}`,
			undefined
		);
	});
	it('getAll should call httpClient.get', async () => {
		mockAxios.get.mockResolvedValueOnce({ data: branches });
		const response = await branchRemoteDataSource.getAll();
		expect(response).toEqual(branches);
		expect(mockAxios.get).toHaveBeenCalledTimes(1);
		expect(mockAxios.get).toHaveBeenCalledWith('/api/branches/all', undefined);
	});
	it('dailyInformation should call httpClient.get', async () => {
		const date = new Date().toDateString();
		const data = {
			employees: employeeGenerator.generateMany(10),
			appointments: appointmentGenerator.generateMany(10),
		} as BranchDailyInformationResponse;
		mockAxios.get.mockResolvedValueOnce({ data });
		const response = await branchRemoteDataSource.dailyInformation({
			id: branch.id,
			date,
		});
		expect(response).toMatchObject(data);
		expect(mockAxios.get).toHaveBeenCalledTimes(1);
		expect(mockAxios.get).toHaveBeenCalledWith(
			`/api/branch/${branch.id}/daily`,
			{
				params: {
					date,
				},
			}
		);
	});
	it('dailyEmployees should call httpClient.get', async () => {
		const date = new Date().toDateString();
		const data = employeeGenerator.generateMany(10);
		mockAxios.get.mockResolvedValueOnce({ data });
		const response = await branchRemoteDataSource.dailyEmployees({
			id: branch.id,
			date,
		});
		expect(response).toEqual(data);
		expect(mockAxios.get).toHaveBeenCalledTimes(1);
		expect(mockAxios.get).toHaveBeenCalledWith(
			`/api/branch/${branch.id}/employees`,
			{
				params: {
					date,
				},
			}
		);
	});
});
