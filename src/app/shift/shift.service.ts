import {Injectable} from '@angular/core';
import {from, Observable, of, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Shift} from "../shift/shift";

const BACKEND_URL = environment.apiUrl + "/shifts/";

@Injectable({
  providedIn: 'root'
})
export class Shiftservice {

  constructor(private http: HttpClient) {}

  getShifts() {
    return this.http.get<any>(BACKEND_URL)
  }

  addShift(shift: any) {
    return this.http.post<{ message: string, shiftId: string }>(BACKEND_URL, shift)
  }

  update(shift: any) {
    return this.http.put<{ message: string }>(BACKEND_URL + shift._id, shift)

  }
}


