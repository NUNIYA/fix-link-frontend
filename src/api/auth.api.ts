import type { Role } from "../types/auth.types";

const fakeDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const sendOtp = async (email: string) => {
  await fakeDelay(1000);

  if (!email.includes("@")) {
    throw new Error("Invalid email address");
  }

  return {
    success: true,
    message: "OTP sent to email",
  };
};

export const verifyOtp = async (otp: string) => {
  await fakeDelay(1000);

  if (otp !== "123456") {
    throw new Error("Invalid OTP");
  }

  return {
    success: true,
    token: "fake-jwt-token",
  };
};

export const registerUser = async (
  role: Role,
  formData: Record<string, string>
) => {
  await fakeDelay(1500);

  if (!formData.name) {
    throw new Error("Name is required");
  }

  return {
    success: true,
    message:
      role === "professional"
        ? "Registration submitted for approval"
        : "Account created successfully",
  };
};
