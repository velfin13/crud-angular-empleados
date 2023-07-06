import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }


  saveEmployee() {
    if (!this.employee.name || !this.employee.email|| !this.employee.lastname) {
      alert('Debe completar todos los campos');
      return;
    }

    this.employeeService.registerEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(['/employees']); 

    }, err => {
      console.log(err);

    });
  }

}
