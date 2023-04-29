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

export const containerBind = (container: Container) => {
	container
		.bind<AnalyticsRemoteDataSource>(AnalyticsRemoteDataSource)
		.to(AnalyticsRemoteDataSourceImpl)
		.inSingletonScope();
	container
		.bind<HttpClient>(HttpClientSymbol)
		.to(HttpClientImpl)
		.inSingletonScope();
	container
		.bind<HttpClient>(HttpClientCachedSymbol)
		.to(HttpClientCachedImpl)
		.inSingletonScope();
};
