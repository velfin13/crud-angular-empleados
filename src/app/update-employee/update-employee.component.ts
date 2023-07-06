import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getEmployeeById(params['id']);
      // Utiliza el valor de employeeId en tu lógica de actualización de empleado
    });

  }

  getEmployeeById(id: string) {
    this.employeeService.getEmployeeById(Number(id)).subscribe(data => {
      this.employee = data;
    });
  }




  editEmployee() {
    if (!this.employee.name || !this.employee.email || !this.employee.lastname) {
      alert('Debe completar todos los campos');
      return;
    }

    this.employeeService.editEmployee(this.employee.id,this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(['/employees']);

    }, err => {
      console.log(err);

    });
  }
}
