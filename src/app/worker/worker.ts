import {Shift} from "../shift/shift";

export interface ShiftWorker {
  checked: boolean;
  _id: string;
  first_name?: string;
  status?: string;
  shifts?:Shift[]
}
