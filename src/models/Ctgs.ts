import { User } from "./User";

export class Ctgs {
  id: number;
  version: number;
  active: boolean;
  tgs: {
    teacher: User;
    schoolClass: {
      id: number;
      version: number;
      label: number;
    };
    grade: {
      id: number;
      version: number;
      label: number;
    };
  };
}
