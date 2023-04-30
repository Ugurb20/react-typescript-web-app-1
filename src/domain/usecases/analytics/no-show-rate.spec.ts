import { getTestContainer } from '@common/inversion-container-test';
import { Container } from 'inversify';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { AnalyticsNoShowRateUseCase } from '@domain/usecases/analytics/no-show-rate';

describe('AnalyticsNoShowRateUseCase', function () {
	let container: Container;
	let analyticsRepository: AnalyticsRepository;
	let analyticsNoShowRateUseCase: AnalyticsNoShowRateUseCase;
	beforeAll(() => {
		container = getTestContainer();
		analyticsRepository = container.get(AnalyticsRepository);
		analyticsNoShowRateUseCase = container.get(AnalyticsNoShowRateUseCase);
	});
	it('should be defined', () => {
		expect(analyticsNoShowRateUseCase).toBeDefined();
	});
	it('should call analyticsRepository.noShowRate', () => {
		const spy = jest.spyOn(analyticsRepository, 'noShowRate');
		analyticsNoShowRateUseCase.call(1);
		expect(spy).toBeCalled();
		expect(spy).toBeCalledWith(1);
	});
});
