import { inject, injectable } from 'inversify';
import { UseCase } from '@common/use-case';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { ServiceDataResponse } from '@domain/types/responses/analytics/service-data';

@injectable()
export class AnalyticsTotalVisitsUseCase
implements UseCase<number, Promise<ServiceDataResponse>>
{
	constructor(
    @inject(AnalyticsRepository)
    private readonly analyticsRepository: AnalyticsRepository
	) {}

	call(customerId: number): Promise<ServiceDataResponse> {
		return this.analyticsRepository.totalVisits(customerId);
	}
}
