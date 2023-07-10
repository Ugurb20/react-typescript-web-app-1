import { injectable } from 'inversify';
import { faker } from '@faker-js/faker';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { MockGenerator } from '@test/__mocks__/types/mock-generator';
import { PetEntity } from '@domain/types/entities/pet';
import { ProductEntity } from '@domain/types/entities/product';
import { BranchEntity } from '@domain/types/entities/branch';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { PetMockGenerator } from '@test/__mocks__/types/entities/pet';
import ProductMockGenerator from '@test/__mocks__/types/entities/product';
import { BranchMockGenerator } from '@test/__mocks__/types/entities/branch';
import { EmployeeMockGenerator } from '@test/__mocks__/types/entities/employee';
import { CustomerEntity } from '@domain/types/entities/customer';
import { CustomerMockGenerator } from '@test/__mocks__/types/entities/customer';

const petMockGenerator = new PetMockGenerator();
const productMockGenerator = new ProductMockGenerator();
const branchMockGenerator = new BranchMockGenerator();
const employeeMockGenerator = new EmployeeMockGenerator();
const customerMockGenerator = new CustomerMockGenerator();

export interface GenerateAppointmentOptions {
  pets?: PetEntity[];
  products?: ProductEntity[];
  branches?: BranchEntity[];
  employees?: EmployeeEntity[];
  customers?: CustomerEntity[];
  date?: Date;
}

export const selectRandom = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const services = ['We Wash', 'Grooming'];
const status = ['Cancelled', 'Pending', 'Completed'];

@injectable()
export class AppointmentMockGenerator extends MockGenerator<AppointmentEntity> {
  generateMany(
    count: number,
    values?: GenerateAppointmentOptions
  ): AppointmentEntity[] {
    // Generate count elements
    return new Array(count)
      .fill(null)
      .map((_, id) => this.generateOne(id, values));
  }

  generateOne(
    id?: number,
    values?: GenerateAppointmentOptions
  ): AppointmentEntity {
    const func = faker.datatype.boolean() ? faker.date.past : faker.date.future;
    const { date } = values ?? {};
    const start = func();
    const end = new Date(
      start.getTime() +
        faker.datatype.number({ min: 1, max: 5 }) * 60 * 60 * 1000
    );

    if (date) {
      start.setFullYear(date.getFullYear());
      start.setMonth(date.getMonth());
      start.setDate(date.getDate());
      end.setFullYear(date.getFullYear());
      end.setMonth(date.getMonth());
      end.setDate(date.getDate());
    }

    return {
      id: id ?? faker.datatype.number(),
      start: start.toString(),
      end: end.toString(),
      customer_notes: faker.lorem.paragraph(),
      tip: faker.datatype.number({
        min: 10,
        max: 100,
      }),
      cost: faker.datatype.number({
        min: 50,
        max: 250,
      }),
      status: selectRandom(status),
      appointment_type: selectRandom(services),
      customer: values?.customers
        ? selectRandom(
            (values as GenerateAppointmentOptions).customers as CustomerEntity[]
          )
        : customerMockGenerator.generateOne(),
      products: values?.products
        ? selectRandom(
            (values as GenerateAppointmentOptions).products as ProductEntity[]
          )
        : productMockGenerator.generateMany(
            faker.datatype.number({
              min: 0,
              max: 5,
            })
          ),
      branch: values?.branches
        ? selectRandom(
            (values as GenerateAppointmentOptions).branches as BranchEntity[]
          )
        : branchMockGenerator.generateOne(),
      employee: values?.employees
        ? selectRandom(
            (values as GenerateAppointmentOptions).employees as EmployeeEntity[]
          )
        : employeeMockGenerator.generateOne(),
      dog: values?.pets
        ? selectRandom(
            (values as GenerateAppointmentOptions).pets as PetEntity[]
          )
        : petMockGenerator.generateOne(),
      employee_notes: faker.lorem.paragraph(),
      reminder_sent: faker.datatype.boolean()
        ? faker.date.past().toString()
        : null,
      check_in: faker.datatype.boolean() ? faker.date.past().toString() : null,
      pick_up: faker.datatype.boolean() ? faker.date.past().toString() : null,
      confirmed_on: faker.datatype.boolean()
        ? faker.date.past().toString()
        : null,
      checkout_time: faker.datatype.boolean()
        ? faker.date.past().toString()
        : null,
      checkout_status: faker.datatype.boolean(),
    } as AppointmentEntity;
  }
}
