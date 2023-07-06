import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getListEmployees().subscribe(data => {
      this.employees = data
    })
  }

  public updateEmployee(id: number) {
    this.router.navigate([`/update-employee/${id}`]);
  }

  public deleteEmployee(id: number) {
    this, this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();

    }, err => {
      console.log(err);

    })

  }

}
