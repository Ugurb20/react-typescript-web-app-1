import { EmployeeEntityImpl } from '@domain/types/classes/employee';
import { EmployeeMockGenerator } from '@test/__mocks__/types/entities/employee';

describe('EmployeeEntityImpl', () => {
  it('should be defined', () => {
    expect(EmployeeEntityImpl).toBeDefined();
  });
  const generator = new EmployeeMockGenerator();
  describe('toString', () => {
    it('should return the name', () => {
      const employee = new EmployeeEntityImpl(generator.generateOne());
      expect(employee.toString()).toEqual(employee.name);
    });
  });
  describe('equals', () => {
    it('should return true if the id is the same', () => {
      const employee = new EmployeeEntityImpl(generator.generateOne());
      const employee2 = new EmployeeEntityImpl(generator.generateOne());
      expect(employee.equals(employee2)).toEqual(false);
      expect(employee.equals(employee)).toEqual(true);
    });
    it('should return false if the id is not the same', () => {
      const employee = new EmployeeEntityImpl(generator.generateOne());
      const employee2 = new EmployeeEntityImpl(generator.generateOne());
      expect(employee.equals(employee2)).toEqual(false);
    });
    it('should return false if the id is same but the object is not an instance of EmployeeEntityImpl', () => {
      const employee = new EmployeeEntityImpl(generator.generateOne());
      const employee2 = generator.generateOne();
      employee2.id = employee.id;
      expect(employee.equals(employee2)).toEqual(false);
    });

    it('should return false if the object is not an instance of EmployeeEntityImpl', () => {
      const employee = new EmployeeEntityImpl(generator.generateOne());
      const employee2 = generator.generateOne();
      expect(employee.equals(employee2)).toEqual(false);
    });
  });
});
