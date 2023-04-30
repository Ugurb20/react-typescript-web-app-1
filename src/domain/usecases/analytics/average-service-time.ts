import { inject, injectable } from 'inversify';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { UseCase } from '@common/use-case';

@injectable()
export class AnalyticsAverageServiceTimeUseCase
implements UseCase<number, Promise<number>>
{
	constructor(
    @inject(AnalyticsRepository)
    private readonly analyticsRepository: AnalyticsRepository
	) {}

	call(petId: number): Promise<number> {
		return this.analyticsRepository.averageServiceTime(petId);
	}
}
