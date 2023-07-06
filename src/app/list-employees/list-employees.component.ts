import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }
  
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getListEmployees().subscribe(data => {
      this.employees = data
    })
  }

}
