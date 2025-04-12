export interface BaseResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  code?: number;
}
export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface AdminCreateResponse {
  username: string;
}
