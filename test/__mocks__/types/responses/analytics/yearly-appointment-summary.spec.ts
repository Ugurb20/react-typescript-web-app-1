import { YearlyAppointmentSummaryResponseMockGenerator } from './yearly-appointment-summary';

describe('YearlyAppointmentSummaryResponseMockGenerator', () => {
  const generator = new YearlyAppointmentSummaryResponseMockGenerator();
  it('should generate one year', () => {
    const result = generator.generateOne();
    expect(result).toBeDefined();
    expect(Object.keys(result)).toHaveLength(12);
  });
  it('should generate one', () => {
    const result = generator.generateOne();
    expect(result).toBeDefined();
  });
  it('should generate many', () => {
    const result = generator.generateMany(3);
    expect(result).toHaveLength(3);
  });
});
