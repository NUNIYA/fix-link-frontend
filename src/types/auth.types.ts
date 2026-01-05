export type Role = "customer" | "professional";

export interface SendOtpResponse {
  success: boolean;
  message: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  token: string; // fake JWT
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}
