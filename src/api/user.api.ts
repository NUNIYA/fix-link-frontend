import type { User } from "../types/user.types";

export const getCurrentUser = async (): Promise<User> => {
  return {
    id: "1",
    email: "test@fixlink.com",
    role: "customer",
    name: "Test User",
  };
};
