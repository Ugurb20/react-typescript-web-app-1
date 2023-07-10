export interface PetEntity {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  description: string;
  rabies_vaccination: string;
  employee_notes: string;
  customer_notes: string;
  special_handling: boolean;
  coat_type: string;
  owner: number;
  gender: string;
  fixed: boolean;
}
