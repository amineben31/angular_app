import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  public employee: any = [];
  constructor(private _employeeService: EmployeeServiceService) {
    this.employee = this._employeeService.getEmployee().subscribe((data) => {
      this.employee = data;
    });
  }
}
