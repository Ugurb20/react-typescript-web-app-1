import { AnalyticsRemoteDataSource } from '@data/datasources/analytics/index.remote';
import { HttpClient } from '@common/http-client';
import { inject, injectable } from 'inversify';
import { InvoiceDistributionResponse } from '@domain/responses/analytics/invoice-distribution';
import { YearlyAppointmentSummaryResponse } from '@domain/responses/analytics/yearly-appointment-summary';
import { ServiceDataResponse } from '@domain/responses/analytics/service-data';
import { HttpClientCachedSymbol } from '@domain/types/symbols';

@injectable()
export class AnalyticsRemoteDataSourceImpl
implements AnalyticsRemoteDataSource
{
	constructor(
    @inject(HttpClientCachedSymbol) private readonly httpClient: HttpClient
	) {}

	async cancellationRate(customerId: number): Promise<number> {
		const response = await this.httpClient.get(
			`/api/analytics/customer/cancellation_rate/${customerId}`
		);
		const { rate } = response.data;
		return rate as number;
	}

	async totalVisits(customerId: number): Promise<ServiceDataResponse> {
		const response = await this.httpClient.get(
			`/api/analytics/customer/visits/${customerId}`
		);
		return response.data;
	}

	async invoiceDistribution(
		customerId: number
	): Promise<InvoiceDistributionResponse> {
		const response = await this.httpClient.get(
			`/api/analytics/customer/invoice_dist/${customerId}`
		);
		return response.data as Promise<InvoiceDistributionResponse>;
	}

	async averageServiceTime(petId: number): Promise<number> {
		const response = await this.httpClient.get(
			`/api/analytics/pet/average_service_time/${petId}`
		);
		return response.data.average_service_time as number;
	}

	async noShowRate(customerId: number): Promise<number> {
		const response = await this.httpClient.get(
			`/api/analytics/customer/no_show_rate/${customerId}`
		);
		return response.data.rate as number;
	}

	async yearlyAppointmentSummary(
		customerId: number
	): Promise<YearlyAppointmentSummaryResponse> {
		const response = await this.httpClient.get(
			`/api/analytics/customer/yearly_appointment_summary/${customerId}`
		);
		return response.data as Promise<YearlyAppointmentSummaryResponse>;
	}
}
