import { getTestContainer } from '@common/inversion-container-test';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { AnalyticsTotalVisitsUseCase } from '@domain/usecases/analytics/total-visits';
import { Container } from 'inversify';
import { ServiceDataResponse } from '@domain/types/responses/analytics/service-data';
import { mock } from 'jest-mock-extended';

describe('AnalyticsTotalVisitsUseCase', function () {
	let container: Container;
	let analyticsRepository: AnalyticsRepository;
	let analyticsTotalVisitsUseCase: AnalyticsTotalVisitsUseCase;
	beforeAll(() => {
		container = getTestContainer();
		analyticsRepository = container.get(AnalyticsRepository);
		analyticsTotalVisitsUseCase = container.get(AnalyticsTotalVisitsUseCase);
	});
	it('should be defined', () => {
		expect(analyticsTotalVisitsUseCase).toBeDefined();
	});
	it('should call repository totalVisits', async () => {
		const mockResponse = mock<ServiceDataResponse>();
		const spy = jest
			.spyOn(analyticsRepository, 'totalVisits')
			.mockResolvedValue(mockResponse);
		await analyticsTotalVisitsUseCase.call(1);
		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(1);
	});
});
