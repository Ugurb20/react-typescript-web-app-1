import { EmployeeMockGenerator } from '@test/__mocks__/types/entities/employee';

describe('EmployeeGenerator', () => {
  const mockGenerator = new EmployeeMockGenerator();
  it('should be defined', () => {
    expect(mockGenerator).toBeDefined();
  });

  it('should generate one', () => {
    const result = mockGenerator.generateOne();
    expect(result).toBeTruthy();
  });
  it('should generate many', () => {
    const result = mockGenerator.generateMany(10);
    expect(result).toBeTruthy();
    expect(result.length).toBe(10);
  });
  it('should generate valid entities.', () => {
    const result = mockGenerator.generateMany(10);
    expect(result).toBeTruthy();
    expect(result.length).toBe(10);
    expect(result[0].id).toBeTruthy();
    expect(result[0].name).toBeTruthy();
    expect(result[0].email).toBeTruthy();
    expect(result[0].created_at).toBeTruthy();
    expect(result[0].updated_at).toBeTruthy();
    expect(result[0].phone).toBeTruthy();
    expect(result[0].role).toBeTruthy();
  });
  it('should generate valid entity.', () => {
    const result = mockGenerator.generateOne();
    expect(result).toBeTruthy();
    expect(result.id).toBeTruthy();
    expect(result.name).toBeTruthy();
    expect(result.email).toBeTruthy();
    expect(result.created_at).toBeTruthy();
    expect(result.updated_at).toBeTruthy();
    expect(result.phone).toBeTruthy();
    expect(result.role).toBeTruthy();
  });
});
