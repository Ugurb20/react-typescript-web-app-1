import { injectable } from 'inversify';
import { InvoiceDistributionResponse } from '@domain/types/responses/analytics/invoice-distribution';
import { YearlyAppointmentSummaryResponse } from '@domain/types/responses/analytics/yearly-appointment-summary';
import { ServiceDataResponse } from '@domain/types/responses/analytics/service-data';
import { RemoteDataSource } from '@domain/interfaces/remote-data-source';

@injectable()
export abstract class AnalyticsRemoteDataSource extends RemoteDataSource {
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
