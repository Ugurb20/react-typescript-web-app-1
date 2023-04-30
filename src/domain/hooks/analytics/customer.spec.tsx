import { getTestContainer } from '@common/inversion-container-test';
import { AnalyticsInvoiceDistributionUseCase } from '@domain/usecases/analytics/invoice-distribution';
import { AnalyticsCancellationRateUseCase } from '@domain/usecases/analytics/cancellation-rate';
import { AnalyticsNoShowRateUseCase } from '@domain/usecases/analytics/no-show-rate';
import { AnalyticsTotalVisitsUseCase } from '@domain/usecases/analytics/total-visits';
import { AnalyticsYearlyAppointmentSummaryUseCase } from '@domain/usecases/analytics/yearly-appointment-summary';
import { useCustomerAnalytics } from '@domain/hooks/analytics/customer';
import { renderHook } from '@testing-library/react-hooks';
import { InvoiceDistributionResponse } from '@domain/types/responses/analytics/invoice-distribution';
import { mock } from 'jest-mock-extended';
import { ServiceDataResponse } from '@domain/types/responses/analytics/service-data';
import { YearlyAppointmentSummaryResponse } from '@domain/types/responses/analytics/yearly-appointment-summary';

let invoiceDistributionUseCaseMock: jest.SpyInstance;
let cancellationRateUseCaseMock: jest.SpyInstance;
let noShowRateUseCaseMock: jest.SpyInstance;
let totalVisitsUseCaseMock: jest.SpyInstance;
let yearlyAppointmentSummaryUseCaseMock: jest.SpyInstance;
// Mock useInjection
jest.mock('inversify-react', () => ({
	useInjection: (useCase: any) => {
		switch (useCase) {
		case AnalyticsInvoiceDistributionUseCase: {
			return invoiceDistributionUseCaseMock;
		}
		case AnalyticsCancellationRateUseCase: {
			return cancellationRateUseCaseMock;
		}
		case AnalyticsNoShowRateUseCase: {
			return noShowRateUseCaseMock;
		}
		case AnalyticsTotalVisitsUseCase: {
			return totalVisitsUseCaseMock;
		}
		case AnalyticsYearlyAppointmentSummaryUseCase: {
			return yearlyAppointmentSummaryUseCaseMock;
		}
      // No default
		}
	},
}));

describe('useCustomerAnalytics', function () {
	beforeAll(() => {
		const container = getTestContainer();
		const invoiceDistributionUseCase = container.get(
			AnalyticsInvoiceDistributionUseCase
		);
		invoiceDistributionUseCaseMock = jest.spyOn(
			invoiceDistributionUseCase,
			'call'
		);
		const cancellationRateUseCase = container.get(
			AnalyticsCancellationRateUseCase
		);
		cancellationRateUseCaseMock = jest.spyOn(cancellationRateUseCase, 'call');
		const noShowRateUseCase = container.get(AnalyticsNoShowRateUseCase);
		noShowRateUseCaseMock = jest.spyOn(noShowRateUseCase, 'call');
		const totalVisitsUseCase = container.get(AnalyticsTotalVisitsUseCase);
		totalVisitsUseCaseMock = jest.spyOn(totalVisitsUseCase, 'call');
		const yearlyAppointmentSummaryUseCase = container.get(
			AnalyticsYearlyAppointmentSummaryUseCase
		);
		yearlyAppointmentSummaryUseCaseMock = jest.spyOn(
			yearlyAppointmentSummaryUseCase,
			'call'
		);
	});
	beforeEach(() => {
		jest.clearAllMocks();
	});
	it('should render', async () => {
		const invoiceDistributionMock = mock<InvoiceDistributionResponse>();
		invoiceDistributionUseCaseMock.mockResolvedValue(invoiceDistributionMock);
		cancellationRateUseCaseMock.mockResolvedValue(1);
		noShowRateUseCaseMock.mockResolvedValue(1);
		const totalVisitsMock = mock<ServiceDataResponse>();
		totalVisitsUseCaseMock.mockResolvedValue(totalVisitsMock);
		const yearlyAppointmentSummaryMock =
      mock<YearlyAppointmentSummaryResponse>();
		yearlyAppointmentSummaryUseCaseMock.mockResolvedValue(
			yearlyAppointmentSummaryMock
		);
		const id = 1;
		const { result, waitForNextUpdate } = renderHook(() =>
			useCustomerAnalytics({ id })
		);

		await waitForNextUpdate();
		expect(invoiceDistributionUseCaseMock).toHaveBeenCalledTimes(1);
		expect(cancellationRateUseCaseMock).toHaveBeenCalledTimes(1);
		expect(noShowRateUseCaseMock).toHaveBeenCalledTimes(1);
		expect(totalVisitsUseCaseMock).toHaveBeenCalledTimes(1);
		expect(yearlyAppointmentSummaryUseCaseMock).toHaveBeenCalledTimes(1);

		expect(result.current.invoiceDistribution).toBe(invoiceDistributionMock);
		expect(result.current.cancellationRate).toBe(1);
		expect(result.current.noShowRate).toBe(1);
		expect(result.current.totalVisits).toBe(totalVisitsMock);
		expect(result.current.yearlyAppointmentSummary).toBe(
			yearlyAppointmentSummaryMock
		);
	});
});
