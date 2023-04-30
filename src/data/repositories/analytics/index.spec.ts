import { getTestContainer } from '@common/inversion-container-test';
import { Container } from 'inversify';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { AnalyticsRemoteDataSource } from '@data/datasources/analytics/index.remote';
import { mock } from 'jest-mock-extended';
import { InvoiceDistributionResponse } from '@domain/types/responses/analytics/invoice-distribution';
import { ServiceDataResponse } from '@domain/types/responses/analytics/service-data';
import { YearlyAppointmentSummaryResponse } from '@domain/types/responses/analytics/yearly-appointment-summary';

describe('AnalyticsRepositoryImpl', () => {
	let container: Container;
	let analyticsRepository: AnalyticsRepository;
	let analyticsRemoteDataSource: AnalyticsRemoteDataSource;
	beforeAll(() => {
		container = getTestContainer();
		analyticsRepository = container.get(AnalyticsRepository);
		analyticsRemoteDataSource = container.get(AnalyticsRemoteDataSource);
	});
	beforeEach(() => {
		jest.resetAllMocks();
	});
	it('should be defined', () => {
		expect(analyticsRepository).toBeDefined();
	});
	it('averageServiceTime should call data source.', async () => {
		jest
			.spyOn(analyticsRemoteDataSource, 'averageServiceTime')
			.mockResolvedValue(1);
		await analyticsRepository.averageServiceTime(1);
		expect(analyticsRemoteDataSource.averageServiceTime).toBeCalled();
		expect(analyticsRemoteDataSource.averageServiceTime).toBeCalledWith(1);
	});
	it('cancellationRate should call data source.', async () => {
		jest
			.spyOn(analyticsRemoteDataSource, 'cancellationRate')
			.mockResolvedValue(1);
		await analyticsRepository.cancellationRate(1);
		expect(analyticsRemoteDataSource.cancellationRate).toBeCalled();
	});
	it('invoiceDistribution should call data source.', async () => {
		const mockResponse = mock<InvoiceDistributionResponse>();
		jest
			.spyOn(analyticsRemoteDataSource, 'invoiceDistribution')
			.mockResolvedValue(mockResponse);
		await analyticsRepository.invoiceDistribution(1);
		expect(analyticsRemoteDataSource.invoiceDistribution).toBeCalled();
	});
	it('noShowRate should call data source.', async () => {
		jest.spyOn(analyticsRemoteDataSource, 'noShowRate').mockResolvedValue(1);
		await analyticsRepository.noShowRate(1);
		expect(analyticsRemoteDataSource.noShowRate).toBeCalled();
	});
	it('totalVisits should call data source.', async () => {
		const mockResponse = mock<ServiceDataResponse>();
		jest
			.spyOn(analyticsRemoteDataSource, 'totalVisits')
			.mockResolvedValue(mockResponse);
		await analyticsRepository.totalVisits(1);
		expect(analyticsRemoteDataSource.totalVisits).toBeCalled();
	});
	it('yearlyAppointmentSummary should call data source.', async () => {
		const mockResponse = mock<YearlyAppointmentSummaryResponse>();
		jest
			.spyOn(analyticsRemoteDataSource, 'yearlyAppointmentSummary')
			.mockResolvedValue(mockResponse);
		await analyticsRepository.yearlyAppointmentSummary(1);
		expect(analyticsRemoteDataSource.yearlyAppointmentSummary).toBeCalled();
	});
});
