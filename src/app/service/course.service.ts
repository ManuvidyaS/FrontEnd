import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../admin/Models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'https://localhost:7723/api/Course'; // Update with your LearningAPI URL

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getCourseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  updateCourse(course: Course): Observable<any> {
    return this.http.put(`${this.apiUrl}/${course.courseId}`, course);
}
deleteCourseById(courseId: number): Observable<any> {
  return this.http.delete<any>(`https://localhost:7723/api/Course/${courseId}`);
}
private baseUrl = 'http://localhost:7777/assignment-api/assign-course';
assignCourse(employeeId: string, courseId: number): Observable<any> {
  const payload = { employeeId, courseId };
  return this.http.post(this.baseUrl, payload);  // No need to add '/assignment' here
}

}