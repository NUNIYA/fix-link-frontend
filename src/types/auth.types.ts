export type Role = "customer" | "professional";

export interface User {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role: Role;
  status: "ACTIVE" | "PENDING_APPROVAL";
  profilePhoto?: string;
  phone?: string;
  city?: string;
  subcity?: string;
  serviceCategory?: string;
  yearsOfExperience?: string;
  skills?: string;
  shortBio?: string;
  hourlyRate?: string;
  paymentType?: "perHour" | "package";
  packages?: { title: string; price: string }[];
  payoutMethod?: string;
  accountNumber?: string;
  languages?: string[];
  portfolio?: { img: string; title: string }[];
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
