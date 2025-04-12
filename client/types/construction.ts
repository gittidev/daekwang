export interface ConstructionResponse {
  id: number;
  place: string;
  period: string;
  description: string;
  is_published: boolean;
  thumbnail?: string;
  created_at: string;
  total_price?: number;
}

export interface ConstructionCreateRequest {
  place: string;
  period: string;
  description: string;
  is_published: boolean;
  thumbnail?: string;
  total_price?: number;
}
