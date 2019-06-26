import {Shift} from "../shift/shift";

export interface ShiftWorker {
  _id: string;
  first_name?: string;
  status?: string;
  shifts?:Shift[]
}
