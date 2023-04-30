import {
  AppointmentMockGenerator,
  GenerateAppointmentOptions,
} from '@test/__mocks__/types/entities/appointment';
import { PetMockGenerator } from '@test/__mocks__/types/entities/pet';
import ProductMockGenerator from '@test/__mocks__/types/entities/product';
import { BranchMockGenerator } from '@test/__mocks__/types/entities/branch';
import { EmployeeMockGenerator } from '@test/__mocks__/types/entities/employee';

describe('AppointmentMockGenerator', () => {
  const generator = new AppointmentMockGenerator();
  const petGenerator = new PetMockGenerator();
  const productMockGenerator = new ProductMockGenerator();
  const branchMockGenerator = new BranchMockGenerator();
  const employeeMockGenerator = new EmployeeMockGenerator();
  it('should be defined.', () => {
    expect(generator).toBeDefined();
  });

  it('should generate one appointment.', () => {
    const appointment = generator.generateOne();
    expect(appointment).toBeDefined();
    expect(appointment.id).toBeDefined();
    expect(appointment.start).toBeDefined();
    expect(appointment.end).toBeDefined();
    expect(appointment.customer_notes).toBeDefined();
  });

  it('should generate many appointments.', () => {
    const appointments = generator.generateMany(5);
    expect(appointments).toBeDefined();
  });

  it('should generate single appointment with pets and check if pet is from given list.', () => {
    const pets = petGenerator.generateMany(5);
    const options = { pets } as GenerateAppointmentOptions;
    const appointment = generator.generateOne(5, options);
    expect(appointment).toBeDefined();
    expect(pets).toContain(appointment.dog);
  });
  it('should generate single appointment with products and check if product is from given list.', () => {
    const products = productMockGenerator.generateMany(5);
    const options = { products } as GenerateAppointmentOptions;
    const appointment = generator.generateOne(5, options);
    expect(appointment).toBeDefined();
    for (let i = 0; i < appointment.products.length; i++) {
      expect(products).toContain(appointment.products[i]);
    }
  });
  it('should generate single appointment with branches and check if branch is from given list.', () => {
    const branches = branchMockGenerator.generateMany(5);
    const options = { branches } as GenerateAppointmentOptions;
    const appointment = generator.generateOne(5, options);
    expect(appointment).toBeDefined();
    expect(branches).toContain(appointment.branch);
  });
  it('should generate single appointment with employee and check if employee is from given list.', () => {
    const employees = employeeMockGenerator.generateMany(5);
    const options = { employees } as GenerateAppointmentOptions;
    const appointment = generator.generateOne(5, options);
    expect(appointment).toBeDefined();
    expect(employees).toContain(appointment.employee);
  });

  it('should generate many appointments with employee and check if employee is from given list.', () => {
    const employees = employeeMockGenerator.generateMany(5);
    const options = { employees } as GenerateAppointmentOptions;
    const appointments = generator.generateMany(5, options);
    expect(appointments).toBeDefined();
    appointments.forEach(appointment => {
      expect(employees).toContain(appointment.employee);
    });
  });
  it('should generate many appointments with pets and check if pet is from given list.', () => {
    const pets = petGenerator.generateMany(5);
    const options = { pets } as GenerateAppointmentOptions;
    const appointments = generator.generateMany(5, options);
    expect(appointments).toBeDefined();
    appointments.forEach(appointment => {
      expect(pets).toContain(appointment.dog);
    });
  });
  it('should generate many appointments with products and check if product is from given list.', () => {
    const products = productMockGenerator.generateMany(5);
    const options = { products } as GenerateAppointmentOptions;
    const appointments = generator.generateMany(5, options);
    expect(appointments).toBeDefined();
    appointments.forEach(appointment => {
      for (let i = 0; i < appointment.products.length; i++) {
        expect(products).toContain(appointment.products[i]);
      }
    });
  });
  it('should generate many appointments with branches and check if branch is from given list.', () => {
    const branches = branchMockGenerator.generateMany(5);
    const options = { branches } as GenerateAppointmentOptions;
    const appointments = generator.generateMany(5, options);
    expect(appointments).toBeDefined();
    appointments.forEach(appointment => {
      expect(branches).toContain(appointment.branch);
    });
  });
  it('should generate many appointments with employee, pets, products and branches and check if they are from given list.', () => {
    const employees = employeeMockGenerator.generateMany(5);
    const pets = petGenerator.generateMany(5);
    const products = productMockGenerator.generateMany(5);
    const branches = branchMockGenerator.generateMany(5);
    const options = {
      employees,
      pets,
      products,
      branches,
    } as GenerateAppointmentOptions;
    const appointments = generator.generateMany(5, options);
    expect(appointments).toBeDefined();
    appointments.forEach(appointment => {
      expect(employees).toContain(appointment.employee);
      expect(pets).toContain(appointment.dog);
      for (let i = 0; i < appointment.products.length; i++) {
        expect(products).toContain(appointment.products[i]);
      }
      expect(branches).toContain(appointment.branch);
    });
  });
});
