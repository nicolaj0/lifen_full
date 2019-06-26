import {Injectable} from '@angular/core';
import {from, Observable, of, Subject} from 'rxjs';
import {ShiftWorker} from "./worker";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Status} from "./status";
import {environment} from "../../environments/environment";
import {Shift} from "../shift/shift";

const BACKEND_URL = environment.apiUrl + "/workers/";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private workers: ShiftWorker[];
  private workersUpdated = new Subject<ShiftWorker[]>();

  constructor(private http: HttpClient) {

  }

  getStatuses(): Status[] {
    return [{key: 1, viewValue: 'medic'},
      {key: 2, viewValue: 'interne'}, {key: 3, viewValue: 'interim'}
    ];
  }

  getStatuseText(val: number): string {
    return this.getStatuses().find(f => f.key == val).viewValue
  }

  getWorkers() {
    this.http.get<any>(BACKEND_URL)
      .subscribe(transformedPosts => {
        this.workers = transformedPosts;
        this.workersUpdated.next([...this.workers]);
      });
  }

  getWorkerUpdateListener() {
    return this.workersUpdated.asObservable();
  }


  deleteWorker(workerId: string) {
    this.http.delete(BACKEND_URL + workerId)
      .subscribe(() => {
        const updatedPosts = this.workers.filter(worker => worker._id !== workerId);
        this.workers = updatedPosts;
        this.workersUpdated.next([...this.workers]);
      });
  }

  addWorker(worker: ShiftWorker) {
    this.http.post<{ message: string, workerId: string }>(BACKEND_URL, worker)
      .subscribe(responseData => {
        const id = responseData.workerId;
        worker._id = id;
        this.workers.push(worker);
        this.workersUpdated.next([...this.workers]);
      });


  }

  editWorker(row: ShiftWorker) {
    console.log('efit')
    this.http.put(BACKEND_URL + row._id, row)
      .subscribe(response => console.log(response));
  }


  getShiftsForWorker(workerId: string) {
    return this.http.get<any>(BACKEND_URL + workerId + "/shifts")
  }
}


