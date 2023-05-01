export interface AppointmentQueryRequest {
  limit?: number;
  offset?: number;
  start__gt?: string;
  start__lt?: string;
  ordering?: string;
  employee?: number;
  customer?: number;
  pet?: number;
  branch?: number;
  status?: string;
  service?: string;
}
