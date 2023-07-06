import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: "employees", component: ListEmployeesComponent },
  { path: "register-employee", component: RegisterEmployeeComponent },
  { path: "update-employee/:id", component: UpdateEmployeeComponent },
  { path: "", redirectTo: "employees", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
