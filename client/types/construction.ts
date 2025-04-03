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
