import { Container } from 'inversify';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { AnalyticsCancellationRateUseCase } from '@domain/usecases/analytics/cancellation-rate';
import { getTestContainer } from '@common/inversion-container-test';

describe('AnalyticsCancellationRateUseCase', () => {
	let container: Container;
	let analyticsRepository: AnalyticsRepository;
	let analyticsCancellationRateUseCase: AnalyticsCancellationRateUseCase;
	beforeAll(() => {
		container = getTestContainer();
		analyticsRepository = container.get(AnalyticsRepository);
		analyticsCancellationRateUseCase = container.get(
			AnalyticsCancellationRateUseCase
		);
	});
	it('should be defined', () => {
		expect(analyticsCancellationRateUseCase).toBeDefined();
	});
	it('should call analyticsRepository.cancellationRate', () => {
		const spy = jest.spyOn(analyticsRepository, 'cancellationRate');
		analyticsCancellationRateUseCase.call(1);
		expect(spy).toBeCalled();
		expect(spy).toBeCalledWith(1);
	});
});
