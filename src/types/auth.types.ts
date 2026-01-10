export type Role = "customer" | "professional";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: "ACTIVE" | "PENDING_APPROVAL";
  profilePhoto?: string;
}

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
