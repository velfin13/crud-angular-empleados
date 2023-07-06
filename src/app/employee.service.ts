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

  // Obtener por id
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  // registrar empleado
  registerEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(this.baseUrl, employee);
  }

  // editar empleado
  editEmployee(id: number, employee: Employee): Observable<Object> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.put(url, employee);
  }

  // registrar empleado
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
