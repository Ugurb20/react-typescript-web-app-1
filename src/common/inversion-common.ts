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
import { EmployeeRemoteDataSource } from '@data/datasources/employee/index.remote';
import { EmployeeRemoteDataSourceImpl } from '@data/datasources/employee/index.remote.impl';
import { EmployeeRepository } from '@domain/repositories/employee';
import { EmployeeRepositoryImpl } from '@data/repositories/employee';
import { EmployeeCreateUseCase } from '@domain/usecases/employee/create';
import { EmployeeDeleteUseCase } from '@domain/usecases/employee/delete';
import { EmployeeGetUseCase } from '@domain/usecases/employee/get';
import { EmployeeGroomersUseCase } from '@domain/usecases/employee/groomers';
import { EmployeeUpdateUseCase } from '@domain/usecases/employee/update';
import { ProductRemoteDataSourceImpl } from '@data/datasources/product/index.remote.impl';
import { ProductRemoteDataSource } from '@data/datasources/product/index.remote';
import { ProductRepositoryImpl } from '@data/repositories/product';
import { ProductRepository } from '@domain/repositories/product';
import { ProductCreateUseCase } from '@domain/usecases/product/create';
import { ProductDeleteUseCase } from '@domain/usecases/product/delete';
import { ProductGetUseCase } from '@domain/usecases/product/get';
import { ProductGetAllUseCase } from '@domain/usecases/product/get-all';
import { ProductUpdateUseCase } from '@domain/usecases/product/update';
import { AppointmentRemoteDataSource } from '@data/datasources/appointment/index.remote';
import { AppointmentRemoteDataSourceImpl } from '@data/datasources/appointment/index.remote.impl';
import { AppointmentRepository } from '@domain/repositories/appointment';
import { AppointmentRepositoryImpl } from '@data/repositories/appointment';
import { AppointmentGetUseCase } from '@domain/usecases/appointment/get';
import { AppointmentCreateUseCase } from '@domain/usecases/appointment/create';
import { AppointmentFilterUseCase } from '@domain/usecases/appointment/filter';
import { AppointmentPatchUseCase } from '@domain/usecases/appointment/patch';
import { HomePageService } from '@pages/home/index.service';
import { LayoutAlgorithm } from '@services/layout-algorithm';
import { DateUtilsService } from '@services/date-utils';
import { ClientRemoteDataSourceImpl } from '@data/datasources/client/index.remote.impl';
import { ClientRemoteDataSource } from '@data/datasources/client/index.remote';
import { HashedSessionStorage } from '@common/hashed-session-storage';
import { IndexedDbCache } from '@common/indexed-db';
import { ClientLocalDataSource } from '@data/datasources/client/index.local';
import { ClientLocalDataSourceImpl } from '@data/datasources/client/index.local.impl';
import { ClientRepositoryImpl } from '@data/repositories/client';
import { ClientRepository } from '@domain/repositories/client';

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

	// Employee
	{
		container
			.bind(EmployeeRemoteDataSource)
			.to(EmployeeRemoteDataSourceImpl)
			.inSingletonScope();
		container
			.bind(EmployeeRepository)
			.to(EmployeeRepositoryImpl)
			.inSingletonScope();
		container.bind(EmployeeCreateUseCase).toSelf().inSingletonScope();
		container.bind(EmployeeDeleteUseCase).toSelf().inSingletonScope();
		container.bind(EmployeeGetUseCase).toSelf().inSingletonScope();
		container.bind(EmployeeGroomersUseCase).toSelf().inSingletonScope();
		container.bind(EmployeeUpdateUseCase).toSelf().inSingletonScope();
	}

	// Product
	{
		container
			.bind(ProductRemoteDataSource)
			.to(ProductRemoteDataSourceImpl)
			.inSingletonScope();
		container
			.bind(ProductRepository)
			.to(ProductRepositoryImpl)
			.inSingletonScope();
		container.bind(ProductCreateUseCase).toSelf().inSingletonScope();
		container.bind(ProductDeleteUseCase).toSelf().inSingletonScope();
		container.bind(ProductGetUseCase).toSelf().inSingletonScope();
		container.bind(ProductGetAllUseCase).toSelf().inSingletonScope();
		container.bind(ProductUpdateUseCase).toSelf().inSingletonScope();
	}

	// Appointment
	{
		container
			.bind(AppointmentRemoteDataSource)
			.to(AppointmentRemoteDataSourceImpl)
			.inSingletonScope();
		container
			.bind(AppointmentRepository)
			.to(AppointmentRepositoryImpl)
			.inSingletonScope();
		container.bind(AppointmentGetUseCase).toSelf().inSingletonScope();
		container.bind(AppointmentCreateUseCase).toSelf().inSingletonScope();
		container.bind(AppointmentFilterUseCase).toSelf().inSingletonScope();
		container.bind(AppointmentPatchUseCase).toSelf().inSingletonScope();
	}

	// Clients
	{
		container.bind(ClientRemoteDataSource).to(ClientRemoteDataSourceImpl).inSingletonScope();
		container.bind(ClientLocalDataSource).to(ClientLocalDataSourceImpl).inSingletonScope();
		container.bind(ClientRepository).to(ClientRepositoryImpl).inSingletonScope();
	}

	// Services
	{
		container.bind(HomePageService).toSelf().inSingletonScope();
		container.bind(LayoutAlgorithm).toSelf().inSingletonScope();
		container.bind(DateUtilsService).toSelf().inSingletonScope();
	}

	// Utils
	{
		container.bind(HashedSessionStorage).toSelf().inSingletonScope();
		container.bind(IndexedDbCache).toSelf().inSingletonScope();
	}
};
