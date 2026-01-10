import type { Role, User } from "../types/auth.types";

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
    emailVerified: true, // In real backend, this might return a temp token
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

  // MOCK SUCCESS RESPONSE
  const mockUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    name: formData.fullName,
    email: formData.email || "test@fixlink.com",
    role: role,
    status: role === "professional" ? "PENDING_APPROVAL" : "ACTIVE",
    profilePhoto: "https://i.pravatar.cc/150",
  };

  return {
    success: true,
    status: role === "professional" ? "PENDING_APPROVAL" : "ACTIVE",
    message:
      role === "professional"
        ? "Your application is under review. We’ll notify you by email."
        : "Account created successfully",
    token: "mock-jwt-token-xyz-123", // Return fake token
    user: mockUser,
  };
};

/**
 * Login User (MOCK)
 */
export const loginUser = async (email: string, password: string) => {
  await fakeDelay(1500);

  if (!email || !password) {
    throw new Error("Please enter email and password");
  }

  if (password.length < 6) {
    throw new Error("Invalid password");
  }

  // Determine role based on email (for demo purposes)
  // If email has 'pro' OR 'pending', treat as professional
  const role: Role = (email.includes("pro") || email.includes("pending")) ? "professional" : "customer";

  // Simulating pending status for testing
  const status = email.includes("pending") ? "PENDING_APPROVAL" : "ACTIVE";

  const mockUser: User = {
    id: "user-123",
    name: email.split("@")[0],
    email: email,
    role: role,
    status: status,
    profilePhoto: "https://i.pravatar.cc/150",
  };

  return {
    success: true,
    token: "mock-jwt-token-xyz-123",
    user: mockUser,
  };
};

/**
 * Forgot Password (MOCK)
 */
export const forgotPassword = async (email: string) => {
  await fakeDelay(1000);
  console.log(`Sending reset password email to ${email}`);
  if (!email) throw new Error("Email is required");
  return { success: true, message: "Reset link sent" };
};

/**
 * Reset Password (MOCK)
 */
export const resetPassword = async (token: string, newPassword: string) => {
  await fakeDelay(1000);
  console.log(`Resetting password with token ${token} to ${newPassword}`);
  if (!token) throw new Error("Invalid token");
  if (!newPassword) throw new Error("New password is required");
  return { success: true, message: "Password reset successfully" };
};
