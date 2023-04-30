import { Container } from 'inversify';
import { AnalyticsRepository } from '@domain/repositories/analytics';
import { AnalyticsAverageServiceTimeUseCase } from '@domain/usecases/analytics/average-service-time';
import { getTestContainer } from '@common/inversion-container-test';

describe('GetAverageServiceTimeUseCase', () => {
	let getAverageServiceTimeUseCase: AnalyticsAverageServiceTimeUseCase;
	let analyticsRepository: AnalyticsRepository;
	let container: Container;
	beforeAll(() => {
		container = getTestContainer();
		getAverageServiceTimeUseCase =
      container.get<AnalyticsAverageServiceTimeUseCase>(
      	AnalyticsAverageServiceTimeUseCase
      );
		analyticsRepository =
      container.get<AnalyticsRepository>(AnalyticsRepository);
	});
	it('should call averageServiceTime from analyticsRepository', async () => {
		jest.spyOn(analyticsRepository, 'averageServiceTime').mockResolvedValue(1);
		await getAverageServiceTimeUseCase.call(1);
		expect(analyticsRepository.averageServiceTime).toBeCalled();
	});
});
