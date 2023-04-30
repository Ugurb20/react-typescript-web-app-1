import { getTestContainer } from '@common/inversion-container-test';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { Container } from 'inversify';
import { AnalyticsInvoiceDistributionUseCase } from '@domain/usecases/analytics/invoice-distribution';
import { InvoiceDistributionResponse } from '@domain/types/responses/analytics/invoice-distribution';
import { mock } from 'jest-mock-extended';

describe('InvoiceDistributionUseCase', () => {
	let container: Container;
	let analyticsRepository: AnalyticsRepository;
	let invoiceDistributionUseCase: AnalyticsInvoiceDistributionUseCase;
	beforeAll(() => {
		container = getTestContainer();
		analyticsRepository =
      container.get<AnalyticsRepository>(AnalyticsRepository);
		invoiceDistributionUseCase =
      container.get<AnalyticsInvoiceDistributionUseCase>(
      	AnalyticsInvoiceDistributionUseCase
      );
	});
	it('should be defined', () => {
		expect(invoiceDistributionUseCase).toBeDefined();
	});
	it('should call analyticsRepository.invoiceDistribution', () => {
		const mockResponse = mock<InvoiceDistributionResponse>();
		const spy = jest
			.spyOn(analyticsRepository, 'invoiceDistribution')
			.mockResolvedValue(mockResponse);
		invoiceDistributionUseCase.call(1);
		expect(spy).toBeCalled();
		expect(spy).toBeCalledWith(1);
	});
});
