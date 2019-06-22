import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface User {
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    let observable = this.http.get<User[]>(this.serviceUrl);

    return observable;
  }
}
