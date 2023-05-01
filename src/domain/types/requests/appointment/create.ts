export interface AppointmentCreateRequest {
  pet: number;
  service: string;
  start: string;
  end: string;
  notes: string | null;
  customer: number;
  employee: number;
  branch: number;
  products: number[] | null;
}
