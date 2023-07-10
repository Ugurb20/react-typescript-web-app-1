import { EmployeeEntity } from '@domain/types/entities/employee';
import { AppointmentEntity } from '@domain/types/entities/appointment';

export interface BranchDailyInformationResponse {
  employees: EmployeeEntity[];
  appointments: AppointmentEntity[];
}
