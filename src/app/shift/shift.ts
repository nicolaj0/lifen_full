import {ShiftWorker} from "../worker/worker";

export class Shift {
  start_date:Date
  worker?: ShiftWorker
  user_id?: string
  user_firstname?: string
  highlighted: boolean
  checked: boolean;
  _id: string;
}

