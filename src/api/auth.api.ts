import type { Role } from "../types/auth.types";

/**
 * Simulate backend delay
 */
const fakeDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Send OTP to email
 */
export const sendOtp = async (email: string) => {
  await fakeDelay(1000);

  if (!email.includes("@")) {
    throw new Error("Please enter a valid email address");
  }

  return {
    success: true,
    message: "Verification code sent to your email",
  };
};

/**
 * Verify OTP
 */
export const verifyOtp = async (otp: string) => {
  await fakeDelay(1000);

  if (otp !== "123456") {
    throw new Error("Invalid verification code");
  }

  return {
    success: true,
    emailVerified: true,
  };
};

/**
 * Register customer or professional
 */
export const registerUser = async (
  role: Role,
  formData: Record<string, any>
) => {
  await fakeDelay(1500);

  if (!formData.fullName) {
    throw new Error("Full name is required");
  }

  if (!formData.password) {
    throw new Error("Password is required");
  }

  return {
    success: true,
    status: role === "professional" ? "PENDING_APPROVAL" : "ACTIVE",
    message:
      role === "professional"
        ? "Your application is under review. We’ll notify you by email."
        : "Account created successfully",
  };
};
