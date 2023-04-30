import { AnalyticsAverageServiceTimeUseCase } from '@domain/usecases/analytics/average-service-time';
import { getTestContainer } from '@common/inversion-container-test';
import { renderHook } from '@testing-library/react-hooks';
import { usePetAnalytics } from '@domain/hooks/analytics/pet';

let averageServiceTimeUseCaseMock: jest.SpyInstance;
jest.mock('inversify-react', () => ({
	useInjection: (useCase: any) => {
		if (useCase === AnalyticsAverageServiceTimeUseCase) {
			return averageServiceTimeUseCaseMock;
		}
	},
}));

describe('usePetAnalytics', () => {
	beforeAll(() => {
		const container = getTestContainer();
		const averageServiceTimeUseCase = container.get(
			AnalyticsAverageServiceTimeUseCase
		);
		averageServiceTimeUseCaseMock = jest.spyOn(
			averageServiceTimeUseCase,
			'call'
		);
	});
	it('should call useCase', async () => {
		averageServiceTimeUseCaseMock.mockResolvedValue(1);
		const id = 1;
		const { waitForNextUpdate, result } = renderHook(() =>
			usePetAnalytics({ id })
		);
		await waitForNextUpdate();
		expect(averageServiceTimeUseCaseMock).toHaveBeenCalledTimes(1);
		expect(result.current.averageServiceTime).toBe(1);
	});
});
