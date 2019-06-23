import {Injectable} from '@angular/core';
import {from, Observable, of, Subject} from 'rxjs';
import {ShiftWorker} from "./worker";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private workers: ShiftWorker[];

  constructor(private http: HttpClient) {

  }
//
  getWorkers() {
    return this.http.get<any>('http://localhost:3000/api/workers')
      .pipe(map((woData) =>{
        return woData.map(w => {
          return {
            first_name : w.first_name,
            status: w.status,
            id : w._id
          }
        })
      }) )
  }

  deleteWorker(workerId : string){
    this.http.delete('http://localhost:3000/api/workers/' + workerId).subscribe(()=>{
      console.log("deleted")
    })
  }

  addWorker(row: ShiftWorker) {
    return this.http.post('http://localhost:3000/api/workers',row)



  }
}
