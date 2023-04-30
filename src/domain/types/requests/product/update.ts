export interface ProductUpdateRequest {
  id: number;
  name?: string;
  description?: string;
  cost?: number;
  category?: string;
  sub_category?: string;
}
