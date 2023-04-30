import { inject, injectable } from 'inversify';
import { InvoiceDistributionResponse } from '@domain/types/responses/analytics/invoice-distribution';
import { UseCase } from '@common/use-case';
import { AnalyticsRepository } from '@domain/repositories/analytics';

@injectable()
export class AnalyticsInvoiceDistributionUseCase
implements UseCase<number, Promise<InvoiceDistributionResponse>>
{
	constructor(
    @inject(AnalyticsRepository)
    private readonly analyticsRepository: AnalyticsRepository
	) {}

	call(customerId: number): Promise<InvoiceDistributionResponse> {
		return this.analyticsRepository.invoiceDistribution(customerId);
	}
}
