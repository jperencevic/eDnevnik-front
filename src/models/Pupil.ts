import { User } from "./User";

export class Pupil {
  id: number;
  version: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  parent: User;
  schoolClass: { label: number; grade: { id: number; label: number } };
}
