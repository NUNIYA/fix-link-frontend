import type { Role } from "./auth.types";

export interface User {
  id: string;
  email: string;
  role: Role;
  name?: string;
}
