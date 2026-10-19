export interface RegisterRequestDto {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequestDto {
  username: string;
  password: string;
}

export interface RegisterResponseDto {
  id: string;
  username: string;
  email: string;
}

export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface ApiErrorResponse {
  error?: {
    code?: string;
    message?: string;
    issues?: unknown[];
  };
}
