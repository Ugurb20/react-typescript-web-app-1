import { Container } from 'inversify';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { YearlyAppointmentSummaryResponse } from '@domain/types/responses/analytics/yearly-appointment-summary';
import { getTestContainer } from '@common/inversion-container-test';
import { AnalyticsYearlyAppointmentSummaryUseCase } from '@domain/usecases/analytics/yearly-appointment-summary';
import { mock } from 'jest-mock-extended';

describe('AnalyticsYearlyAppointmentSummaryUseCase', () => {
	let analyticsRepository: AnalyticsRepository;
	let analyticsYearlyAppointmentSummaryUseCase: AnalyticsYearlyAppointmentSummaryUseCase;
	let container: Container;

	beforeAll(() => {
		container = getTestContainer();
		analyticsRepository = container.get(AnalyticsRepository);
		analyticsYearlyAppointmentSummaryUseCase = container.get(
			AnalyticsYearlyAppointmentSummaryUseCase
		);
	});
	it('should be defined.', () => {
		expect(analyticsYearlyAppointmentSummaryUseCase).toBeDefined();
	});
	it('should call repository.yearlyAppointmentSummary(customerId) once.', async () => {
		const mockYearlyAppointmentSummaryResponse =
      mock<YearlyAppointmentSummaryResponse>();
		const spy = jest
			.spyOn(analyticsRepository, 'yearlyAppointmentSummary')
			.mockResolvedValue(mockYearlyAppointmentSummaryResponse);
		await analyticsYearlyAppointmentSummaryUseCase.call(1);
		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith(1);
	});
});
