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
  // Guard against invalid/expired/undefined token strings
  if (token && token !== "undefined" && token !== "null") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add interceptor to handle 401 Unauthorized errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect if unauthorized
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");

      // Force reload to clear state and redirect via App routes if they guard
      // Only do this if we're not already on the login page to avoid loops
      if (!window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

/**
 * Helper to parse backend errors
 */
const parseError = (error: any): string => {
  if (error.response?.data) {
    const data = error.response.data;

    // 1. If it's a "detail" string (generic)
    if (typeof data.detail === "string") return data.detail;

    // 2. If it's a "detail" object or list (specific fields)
    if (data.detail && typeof data.detail === "object") {
      return Object.entries(data.detail)
        .map(([field, msg]) => `${field}: ${Array.isArray(msg) ? msg[0] : msg}`)
        .join(" | ");
    }

    // 3. Handle standard DRF field errors (errors in root object)
    const errorEntries = Object.entries(data);
    if (errorEntries.length > 0) {
      return errorEntries
        .map(([field, msg]) => {
          if (field === "non_field_errors") return Array.isArray(msg) ? msg[0] : msg;
          return `${field}: ${Array.isArray(msg) ? msg[0] : msg}`;
        })
        .join(" | ");
    }
  }
  return "Something went wrong. Please try again.";
};

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
      // Pass other fields only if they exist (simplification for professional)
      ...(formData.serviceCategory && { profession: formData.serviceCategory }),
      ...(formData.yearsOfExperience && { years_of_experience: Number(formData.yearsOfExperience) }),
      ...(formData.shortBio && { bio: formData.shortBio }),
      ...(formData.location && { location: formData.location }),
      ...(formData.payoutMethod && { payout_method: formData.payoutMethod }),
      ...(formData.accountNumber && { account_number: formData.accountNumber }),
    };

    const endpoint = role === "professional"
      ? "/accounts/users/register-professional/"
      : "/accounts/users/register/";

    const response = await api.post(endpoint, payload);
    return {
      success: true,
      user: response.data.user,
      access: response.data.access,
      refresh: response.data.refresh,
    };
  } catch (error: any) {
    throw new Error(parseError(error));
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
    throw new Error(error.response?.data?.detail || error.response?.data?.error || "Invalid credentials");
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

