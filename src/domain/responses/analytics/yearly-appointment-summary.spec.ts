import { YearlyAppointmentSummaryResponse } from '@domain/responses/analytics/yearly-appointment-summary';

describe('YearlyAppointmentSummaryResponse', () => {
	it('should be defined.', () => {
		const yearlySummaryResponse = {
			'01-05-2022': {
				tip: 10,
				we_wash: 50,
				grooming: 80,
				products: 20,
			},
			'01-06-2022': {
				tip: 5,
				we_wash: 40,
				grooming: 70,
				products: 15,
			},
			'01-07-2022': {
				tip: 0,
				we_wash: 0,
				grooming: 0,
				products: 0,
			},
			'01-08-2022': {
				tip: 20,
				we_wash: 60,
				grooming: 100,
				products: 25,
			},
			'01-09-2022': {
				tip: 0,
				we_wash: 0,
				grooming: 0,
				products: 0,
			},
			'01-10-2022': {
				tip: 15,
				we_wash: 30,
				grooming: 60,
				products: 10,
			},
			'01-11-2022': {
				tip: 0,
				we_wash: 0,
				grooming: 0,
				products: 0,
			},
			'01-12-2022': {
				tip: 25,
				we_wash: 40,
				grooming: 120,
				products: 30,
			},
			'01-01-2023': {
				tip: 0,
				we_wash: 0,
				grooming: 0,
				products: 0,
			},
			'01-02-2023': {
				tip: 10,
				we_wash: 20,
				grooming: 50,
				products: 5,
			},
			'01-03-2023': {
				tip: 0,
				we_wash: 0,
				grooming: 0,
				products: 0,
			},
			'01-04-2023': {
				tip: 30,
				we_wash: 70,
				grooming: 140,
				products: 35,
			},
		} as YearlyAppointmentSummaryResponse;
		expect(yearlySummaryResponse).toBeDefined();
	});
});
