import { HomePageService } from '@pages/home/index.service';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import { AppointmentFilterUseCase } from '@domain/usecases/appointment/filter';
import { advanceTo, clear } from 'jest-date-mock';

describe('HomePageService', () => {
	let container: Container;
	let service: HomePageService;
	let appointmentFilterUseCase: AppointmentFilterUseCase;

	beforeEach(() => {
		container = getTestContainer();
		appointmentFilterUseCase = container.get(AppointmentFilterUseCase);
		service = container.get(HomePageService);
	});

	it('should be defined', () => {
		expect(HomePageService).toBeTruthy();
	});
	it('should be binded', () => {
		expect(service).toBeTruthy();
	});
	describe('getDailyAppointments', () => {
		const date = new Date(2021, 1, 1, 0, 0, 0, 0);
		beforeEach(() => {
			advanceTo(date);
		});

		afterEach(() => {
			clear();
		});

		it('should be called with correct format', async () => {
			const branchId = 1;
			jest.spyOn(appointmentFilterUseCase, 'call').mockResolvedValue({
				count: 0,
				next: null,
				previous: null,
				results: [],
			});

			await service.getDailyAppointments(1, date);
			expect(appointmentFilterUseCase.call).toBeCalledWith({
				branch: branchId,
				offset: expect.anything(),
				limit: expect.anything(),
				start__gt: expect.any(String),
				start__lt: expect.any(String),
			});
		});
	});
});
