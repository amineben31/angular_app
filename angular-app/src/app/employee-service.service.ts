import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee_interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private url = 'http://localhost:3000/';

  constructor() {}
  getEmployee(): Observable<IEmployee[]> {
    // Utilisation d'une méthode alternative pour récupérer les données
    return new Observable<IEmployee[]>((observer) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
          observer.next(data as IEmployee[]);
          observer.complete();
        })
        .catch((error) => observer.error(error));
    });
  }
}
