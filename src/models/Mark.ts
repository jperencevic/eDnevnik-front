import { Ctgs } from "./Ctgs";
import { User } from "./User";

export class Mark {
  mark: number;
  markGiven: string;
  markNoted: string;
  type: { id: number; version: number; type: string; description: string };
  ctgs: Ctgs;
  pupil: User;
}
