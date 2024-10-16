import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { HttpClientModule } from '@angular/common/http'; // Import de HttpClientModule

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Ajoutez HttpClientModule ici
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  public employee: any = [];

  constructor(private _employeeService: EmployeeServiceService) {
    this._employeeService.getEmployee().subscribe((data) => {
      this.employee = data;
    });
  }
}
