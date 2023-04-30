import { inject, injectable } from 'inversify';
import { UseCase } from '@common/use-case';
import { AnalyticsRepository } from '@domain/repositories/analytics';

@injectable()
export class AnalyticsCancellationRateUseCase
implements UseCase<number, Promise<number>>
{
	constructor(
    @inject(AnalyticsRepository)
    private readonly analyticsRepository: AnalyticsRepository
	) {}

	call(customerId: number): Promise<number> {
		return this.analyticsRepository.cancellationRate(customerId);
	}
}
