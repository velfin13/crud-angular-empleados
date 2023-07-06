import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "employees", component: ListEmployeesComponent },
  { path: "", redirectTo: "employees", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
