import { faker } from '@faker-js/faker';
import { YearlyAppointmentSummaryResponse } from '@domain/types/responses/analytics/yearly-appointment-summary';
import { MockGenerator } from '@test/__mocks__/types/mock-generator';

export class YearlyAppointmentSummaryResponseMockGenerator extends MockGenerator<YearlyAppointmentSummaryResponse> {
  generateOne(): YearlyAppointmentSummaryResponse {
    const start = new Date();
    const endMonth = new Date(start.getFullYear(), start.getMonth(), 1);
    const oneYearAgo = new Date(start.getFullYear() - 1, start.getMonth(), 1);

    const yearlySummaryResponse: YearlyAppointmentSummaryResponse = {};
    for (let d = oneYearAgo; d < endMonth; d.setMonth(d.getMonth() + 1)) {
      const key = d.toLocaleDateString('en-US', {
        month: '2-digit',
        year: 'numeric',
      });
      yearlySummaryResponse[key] = {
        tip: faker.datatype.number({ min: 0, max: 1000 }),
        we_wash: faker.datatype.number({ min: 0, max: 1000 }),
        grooming: faker.datatype.number({ min: 0, max: 1000 }),
        products: faker.datatype.number({ min: 0, max: 1000 }),
      };
    }
    return yearlySummaryResponse;
  }
  generateMany(N: number): YearlyAppointmentSummaryResponse[] {
    return Array(N)
      .fill(null)
      .map(() => this.generateOne());
  }
}
