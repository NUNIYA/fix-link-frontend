import axios from "axios";
import type { Role, User } from "../types/auth.types";

const API_URL = "https://auction-sao-talks-recreation.trycloudflare.com";

// Create axios instance
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptor to include token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Register user
 */
export const registerUser = async (role: Role, formData: Record<string, any>) => {
  try {
    const payload = {
      username: formData.email.split("@")[0] + Math.floor(Math.random() * 1000),
      email: formData.email,
      password: formData.password,
      first_name: formData.firstName,
      last_name: formData.lastName,
      phonenumber: formData.phone,
      role: role,
    };

    const response = await api.post("/accounts/users/register/", payload);
    return {
      success: true,
      user: response.data.user,
      access: response.data.access,
      refresh: response.data.refresh,
    };
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || error.response?.data?.error || "Registration failed");
  }
};

/**
 * Login User
 */
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/accounts/users/login/", {
      email: email,
      password: password,
    });

    return {
      success: true,
      user: response.data.user,
      access: response.data.access,
      refresh: response.data.refresh,
    };
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || "Invalid credentials");
  }
};

/**
 * Update User Profile
 */
export const updateUserProfile = async (id: string, data: Partial<User>) => {
  try {
    // Map frontend fields back to backend if needed
    const apiData = {
      ...data,
      bio: data.bio || (data as any).shortBio,
      profession: data.profession || (data as any).serviceCategory,
      years_of_experience: data.years_of_experience || Number((data as any).yearsOfExperience)
    };

    // Remove null/undefined to avoid overwriting with empty
    Object.keys(apiData).forEach(key => (apiData as any)[key] === undefined && delete (apiData as any)[key]);

    const response = await api.patch(`/accounts/users/${id}/`, apiData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || "Failed to update profile");
  }
};

/**
 * Verify Email OTP
 */
export const verifyOtp = async (email: string, otp: string) => {
  const response = await api.post("/accounts/users/verify-email/", { email, otp });
  return response.data;
};

/**
 * Resend Email OTP
 */
export const resendOtp = async (email: string) => {
  const response = await api.post("/accounts/users/resend-email-otp/", { email });
  return response.data;
};

/**
 * Forgot Password
 */
export const forgotPassword = async (email: string) => {
  const response = await api.post("/accounts/users/forgot-password/", { email });
  return response.data;
};

/**
 * Reset Password
 */
export const resetPassword = async (email: string, otp: string, new_password: string) => {
  const response = await api.post("/accounts/users/reset-password/", { email, otp, new_password });
  return response.data;
};

export default api;

