import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee_interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private url = '/assets/data/employee.json';
  constructor(private http: HttpClient) {}
  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
  }
}
