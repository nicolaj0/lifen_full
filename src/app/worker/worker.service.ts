import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {ShiftWorker} from "./worker";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private array: ShiftWorker[];

  constructor() {
     this.array = [
      { id: 1, first_name: "Julie", status: "medic" },
      { id: 2, first_name: "Marc", status: "medic" },
      { id: 3, first_name: "Antoine", status: "interne" },
      { id: 4, first_name: "Emilie", status: "medic" },
      { id: 5, first_name: "Lea", status: "interim" }
    ]
  }

  getWorkers() :  Observable<ShiftWorker[]> {

    return of(this.array);
  }

  addWorker(row: ShiftWorker) {
    let numbers = this.array.map(f=>f.id);
    var max = Math.max(...numbers)
    row.id = max+1;
    this.array.push(row);
  }
}
