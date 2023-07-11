import { CustomerEntity } from '@domain/types/entities/customer';
import { mock } from 'jest-mock-extended';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { PetEntity } from '@domain/types/entities/pet';
import { BranchEntity } from '@domain/types/entities/branch';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { faker } from '@faker-js/faker';

describe('AppointmentEntity', function () {
  it('should create an instance', function () {
    const appointmentEntity = {
      id: 1,
      customer: mock<CustomerEntity>(),
      dog: mock<PetEntity>(),
      start: faker.date.past().toString(),
      end: faker.date.past().toString(),
      customer_notes: faker.lorem.paragraph(),
      employee_notes: faker.lorem.paragraph(),
      tip: 1,
      cost: 1,
      products: [],
      branch: mock<BranchEntity>(),
      employee: mock<EmployeeEntity>(),
      status: 'status',
      appointment_type: 'type',
      reminder_sent: faker.date.past().toString(),
      check_in: faker.date.past().toString(),
      pick_up: faker.date.past().toString(),
      confirmed_on: faker.date.past().toString(),
      checkout_time: faker.date.past().toString(),
      checkout_status: true,
    } as AppointmentEntity;
    expect(appointmentEntity).toBeDefined();
  });
});
