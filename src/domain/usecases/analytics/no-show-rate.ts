import { UseCase } from '@common/use-case';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { inject, injectable } from 'inversify';
@injectable()
export class AnalyticsNoShowRateUseCase
implements UseCase<number, Promise<number>>
{
	constructor(
    @inject(AnalyticsRepository)
    private readonly analyticsRepository: AnalyticsRepository
	) {}

	call(customerId: number): Promise<number> {
		return this.analyticsRepository.noShowRate(customerId);
	}
}
