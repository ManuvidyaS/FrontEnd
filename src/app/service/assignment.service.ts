import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private apiUrl = 'http://localhost:7777/assignment-api';

  constructor(private http: HttpClient) {}

  // Fetch all coursesa
  getCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses`);
  }

  // Fetch all employees
  getEmployees(): Observable<any> {
    return this.http.get(`${this.apiUrl}/employees`);
  }

  // Assign a course to an employee
  assignCourse(employeeId: string, courseId: number): Observable<any> {
    const payload = { employeeId, courseId };
    return this.http.post(`${this.apiUrl}/assign-course`, payload);
  }
}
