import { Container } from 'inversify';
import { AnalyticsRemoteDataSource } from '@data/datasources/analytics/index.remote';
import { AnalyticsRemoteDataSourceImpl } from '@data/datasources/analytics/index.remote.impl';
import { HttpClient } from '@common/http-client';
import { HttpClientImpl } from '@common/http-client-impl';
import {
  HttpClientCachedSymbol,
  HttpClientSymbol,
} from '@domain/types/symbols';
import { HttpClientCachedImpl } from '@common/http-client-cached-impl';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { AnalyticsRepositoryImpl } from '@data/repositories/analytics';
import { AnalyticsAverageServiceTimeUseCase } from '@domain/usecases/analytics/average-service-time';
import { AnalyticsCancellationRateUseCase } from '@domain/usecases/analytics/cancellation-rate';
import { AnalyticsInvoiceDistributionUseCase } from '@domain/usecases/analytics/invoice-distribution';
import { AnalyticsNoShowRateUseCase } from '@domain/usecases/analytics/no-show-rate';
import { AnalyticsTotalVisitsUseCase } from '@domain/usecases/analytics/total-visits';
import { AnalyticsYearlyAppointmentSummaryUseCase } from '@domain/usecases/analytics/yearly-appointment-summary';
import { BranchRemoteDataSource } from '@data/datasources/branch/index.remote';
import { BranchRemoteDataSourceImpl } from '@data/datasources/branch/index.remote.impl';
import { BranchRepository } from '@domain/repositories/branch';
import { BranchRepositoryImpl } from '@data/repositories/branch';
import { BranchCreateUseCase } from '@domain/usecases/branch/create';
import { BranchDailyEmployeesUseCase } from '@domain/usecases/branch/daily-employees';
import { BranchDailyInformationUseCase } from '@domain/usecases/branch/daily-information';
import { BranchDeleteUseCase } from '@domain/usecases/branch/delete';
import { BranchGetUseCase } from '@domain/usecases/branch/get';
import { BranchGetAllUseCase } from '@domain/usecases/branch/get-all';
import { BranchUpdateUseCase } from '@domain/usecases/branch/update';

export const containerBind = (container: Container) => {
  // Analytics
  {
    container
      .bind<AnalyticsRemoteDataSource>(AnalyticsRemoteDataSource)
      .to(AnalyticsRemoteDataSourceImpl)
      .inSingletonScope();
    container
      .bind(AnalyticsRepository)
      .to(AnalyticsRepositoryImpl)
      .inSingletonScope();
    container
      .bind(AnalyticsAverageServiceTimeUseCase)
      .toSelf()
      .inSingletonScope();
    container
      .bind(AnalyticsCancellationRateUseCase)
      .toSelf()
      .inSingletonScope();
    container
      .bind(AnalyticsInvoiceDistributionUseCase)
      .toSelf()
      .inSingletonScope();
    container.bind(AnalyticsNoShowRateUseCase).toSelf().inSingletonScope();
    container.bind(AnalyticsTotalVisitsUseCase).toSelf().inSingletonScope();
    container
      .bind(AnalyticsYearlyAppointmentSummaryUseCase)
      .toSelf()
      .inSingletonScope();
  }

  // Http
  {
    container
      .bind<HttpClient>(HttpClientSymbol)
      .to(HttpClientImpl)
      .inSingletonScope();
    container
      .bind<HttpClient>(HttpClientCachedSymbol)
      .to(HttpClientCachedImpl)
      .inSingletonScope();
  }

  // Branch
  {
    container
      .bind(BranchRemoteDataSource)
      .to(BranchRemoteDataSourceImpl)
      .inSingletonScope();
    container
      .bind(BranchRepository)
      .to(BranchRepositoryImpl)
      .inSingletonScope();
    container.bind(BranchCreateUseCase).toSelf().inSingletonScope();
    container.bind(BranchDailyEmployeesUseCase).toSelf().inSingletonScope();
    container.bind(BranchDailyInformationUseCase).toSelf().inSingletonScope();
    container.bind(BranchDeleteUseCase).toSelf().inSingletonScope();
    container.bind(BranchGetUseCase).toSelf().inSingletonScope();
    container.bind(BranchGetAllUseCase).toSelf().inSingletonScope();
    container.bind(BranchUpdateUseCase).toSelf().inSingletonScope();
  }
};
