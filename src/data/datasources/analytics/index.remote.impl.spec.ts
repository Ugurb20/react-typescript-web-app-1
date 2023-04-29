import { AnalyticsRemoteDataSourceImpl } from '@data/datasources/analytics/index.remote.impl';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import { AnalyticsRemoteDataSource } from '@data/datasources/analytics/index.remote';
import mockAxios from 'jest-mock-axios';
import { YearlyAppointmentSummaryResponseMockGenerator } from '@test/__mocks__/types/responses/analytics/yearly-appointment-summary';
import { InvoiceDistributionResponseMockGenerator } from '@test/__mocks__/types/responses/analytics/invoice-distribution';
/* eslint-disable sonarjs/no-duplicate-string */

describe('AnalyticsRemoteDataSourceImpl', () => {
	let analyticsRemoteDataSource: AnalyticsRemoteDataSourceImpl;
	let container: Container;
	const customerId = 1;
	const petId = 1;
	const yearlyAppointmentSummaryResponseGenerator =
    new YearlyAppointmentSummaryResponseMockGenerator();
	const invoiceDistributionResponseGenerator =
    new InvoiceDistributionResponseMockGenerator();
	beforeAll(() => {
		container = getTestContainer();
		analyticsRemoteDataSource = container.get(
			AnalyticsRemoteDataSource
		) as AnalyticsRemoteDataSourceImpl;
	});
	afterEach(() => {
		mockAxios.reset();
	});

	it('should be defined.', () => {
		expect(analyticsRemoteDataSource).toBeDefined();
	});

	describe('cancellationRate', () => {
		it('should return cancellation rate.', async () => {
			mockAxios.get.mockResolvedValue({
				status: 200,
				data: {
					rate: 0.5,
				},
			});
			const rate = await analyticsRemoteDataSource.cancellationRate(customerId);
			expect(mockAxios.get).toHaveBeenCalledWith(
				`/api/analytics/customer/cancellation_rate/${customerId}`,
				undefined
			);
			expect(rate).toBe(0.5);
		});
		it('should throw error when status is not 200.', async () => {
			mockAxios.get.mockResolvedValue({
				status: 500,
			});
			await expect(
				analyticsRemoteDataSource.cancellationRate(customerId)
			).rejects.toThrow();
		});
	});
	describe('totalVisits', () => {
		it('should return total visits.', async () => {
			const data = {
				we_wash: 10,
				grooming: 10,
			};
			mockAxios.get.mockResolvedValue({
				status: 200,
				data: data,
			});
			const totalVisits = await analyticsRemoteDataSource.totalVisits(
				customerId
			);
			expect(mockAxios.get).toHaveBeenCalledWith(
				`/api/analytics/customer/visits/${customerId}`,
				undefined
			);
			expect(totalVisits).toBe(data);
		});
	});
	describe('invoiceDistribution', () => {
		it('should return invoice distribution.', async () => {
			const data = invoiceDistributionResponseGenerator.generateOne();
			mockAxios.get.mockResolvedValue({
				status: 200,
				data: data,
			});
			const invoiceDistribution =
        await analyticsRemoteDataSource.invoiceDistribution(customerId);
			expect(mockAxios.get).toHaveBeenCalledWith(
				`/api/analytics/customer/invoice_dist/${customerId}`,
				undefined
			);
			expect(invoiceDistribution).toBe(data);
		});
	});
	describe('averageServiceTime', () => {
		it('should return average service time.', async () => {
			const data = {
				average_service_time: 10,
			};
			mockAxios.get.mockResolvedValue({
				status: 200,
				data: data,
			});
			const averageServiceTime =
        await analyticsRemoteDataSource.averageServiceTime(petId);
			expect(mockAxios.get).toHaveBeenCalledWith(
				`/api/analytics/pet/average_service_time/${petId}`,
				undefined
			);
			expect(averageServiceTime).toBe(data.average_service_time);
		});
		it('should throw error when status is not 200.', async () => {
			mockAxios.get.mockResolvedValue({
				status: 500,
			});
			await expect(
				analyticsRemoteDataSource.averageServiceTime(petId)
			).rejects.toThrow();
		});
	});
	describe('noShowRate', () => {
		it('should return no show rate.', async () => {
			const customerId = 1;
			const data = {
				rate: 10,
			};
			mockAxios.get.mockResolvedValue({
				status: 200,
				data: data,
			});
			const noShowRate = await analyticsRemoteDataSource.noShowRate(customerId);
			expect(mockAxios.get).toHaveBeenCalledWith(
				`/api/analytics/customer/no_show_rate/${customerId}`,
				undefined
			);
			expect(noShowRate).toBe(data.rate);
		});
		it('should throw error when status is not 200.', async () => {
			const customerId = 1;
			mockAxios.get.mockResolvedValue({
				status: 500,
			});
			await expect(
				analyticsRemoteDataSource.noShowRate(customerId)
			).rejects.toThrow();
		});
	});
	describe('yearlyAppointmentSummary', () => {
		it('should return yearly appointment summary.', async () => {
			const data = yearlyAppointmentSummaryResponseGenerator.generateOne();
			mockAxios.get.mockResolvedValue({
				status: 200,
				data: data,
			});
			const yearlyAppointmentSummary =
        await analyticsRemoteDataSource.yearlyAppointmentSummary(customerId);
			expect(mockAxios.get).toHaveBeenCalledWith(
				`/api/analytics/customer/yearly_appointment_summary/${customerId}`,
				undefined
			);
			expect(yearlyAppointmentSummary).toMatchObject(data);
		});
	});
});
