import { AnalyticsRepository } from '@domain/repositories/analytics';
import { inject, injectable } from 'inversify';
import { AnalyticsRemoteDataSourceImpl } from '@data/datasources/analytics/index.remote.impl';
import { AnalyticsRemoteDataSource } from '@data/datasources/analytics/index.remote';
import { InvoiceDistributionResponse } from '@domain/types/responses/analytics/invoice-distribution';
import { ServiceDataResponse } from '@domain/types/responses/analytics/service-data';
import { YearlyAppointmentSummaryResponse } from '@domain/types/responses/analytics/yearly-appointment-summary';

@injectable()
export class AnalyticsRepositoryImpl extends AnalyticsRepository {
	constructor(
    @inject(AnalyticsRemoteDataSource)
    private readonly analyticsRemoteDataSource: AnalyticsRemoteDataSourceImpl
	) {
		super();
	}

	averageServiceTime(petId: number): Promise<number> {
		return this.analyticsRemoteDataSource.averageServiceTime(petId);
	}

	cancellationRate(customerId: number): Promise<number> {
		return this.analyticsRemoteDataSource.cancellationRate(customerId);
	}

	invoiceDistribution(
		customerId: number
	): Promise<InvoiceDistributionResponse> {
		return this.analyticsRemoteDataSource.invoiceDistribution(customerId);
	}

	noShowRate(customerId: number): Promise<number> {
		return this.analyticsRemoteDataSource.noShowRate(customerId);
	}

	totalVisits(customerId: number): Promise<ServiceDataResponse> {
		return this.analyticsRemoteDataSource.totalVisits(customerId);
	}

	yearlyAppointmentSummary(
		customerId: number
	): Promise<YearlyAppointmentSummaryResponse> {
		return this.analyticsRemoteDataSource.yearlyAppointmentSummary(customerId);
	}
}
