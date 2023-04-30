import { CustomerEntity } from '@domain/types/entities/customer';
import { PetEntity } from '@domain/types/entities/pet';
import { ProductEntity } from '@domain/types/entities/product';
import { BranchEntity } from '@domain/types/entities/branch';
import { EmployeeEntity } from '@domain/types/entities/employee';

export interface AppointmentEntity {
  id: number;
  customer: CustomerEntity;
  dog: PetEntity;
  start: string;
  end: string;
  customer_notes: string;
  employee_notes: string;
  tip: number;
  cost: number;
  products: ProductEntity[]; // Replace 'Product' with the actual Product interface
  branch: BranchEntity; // Replace 'Branch' with the actual Branch interface
  employee: EmployeeEntity | null; // Replace 'Employee' with the actual Employee interface
  status: string;
  appointment_type: string;
  reminder_sent: string | null;
  check_in: string | null;
  pick_up: string | null;
  confirmed_on: string | null;
  checkout_time: string | null;
  checkout_status: boolean;
}
