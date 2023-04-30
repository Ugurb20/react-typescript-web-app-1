import { inject, injectable } from 'inversify';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { UseCase } from '@common/use-case';
import { YearlyAppointmentSummaryResponse } from '@domain/types/responses/analytics/yearly-appointment-summary';

@injectable()
export class AnalyticsYearlyAppointmentSummaryUseCase
implements UseCase<number, Promise<YearlyAppointmentSummaryResponse>>
{
	constructor(
    @inject(AnalyticsRepository)
    private readonly analyticsRepository: AnalyticsRepository
	) {}

	call(customerId: number): Promise<YearlyAppointmentSummaryResponse> {
		return this.analyticsRepository.yearlyAppointmentSummary(customerId);
	}
}
