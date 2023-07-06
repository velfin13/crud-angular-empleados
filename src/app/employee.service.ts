import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:3000/api/employees";

  constructor(private httpClient: HttpClient) { }

  // Obtener empleados
  getListEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }

  // registrar empleado
  registerEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(this.baseUrl, employee);
  }
}
