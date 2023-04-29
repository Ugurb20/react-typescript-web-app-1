import { injectable } from 'inversify';
import { InvoiceDistributionResponse } from '@domain/responses/analytics/invoice-distribution';
import { YearlyAppointmentSummaryResponse } from '@domain/responses/analytics/yearly-appointment-summary';
import { ServiceDataResponse } from '@domain/responses/analytics/service-data';

@injectable()
export abstract class AnalyticsRemoteDataSource {
  abstract averageServiceTime(petId: number): Promise<number>;

  abstract invoiceDistribution(
    customerId: number
  ): Promise<InvoiceDistributionResponse>;

  abstract noShowRate(customerId: number): Promise<number>;

  abstract yearlyAppointmentSummary(
    customerId: number
  ): Promise<YearlyAppointmentSummaryResponse>;

  abstract cancellationRate(customerId: number): Promise<number>;

  abstract totalVisits(customerId: number): Promise<ServiceDataResponse>;
}
