import { Injectable } from '@angular/core';

import { ApiResponse } from '../update-course/update-course.component';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({

 providedIn: 'root'

})

export class UserService {
 getAssignedCourses(id: any) {
   throw new Error('Method not implemented.');
 }

 private apiUrl = 'http://localhost:7725/api/assignment'; // Update with correct gateway URL

 constructor(private http: HttpClient) {}

 updateCourseProgress(employeeId: string, courseId: number, modulesCompleted: number): Observable<ApiResponse> {

  const body = { employeeId, courseId, modulesCompleted };

  return this.http.post<ApiResponse>(`${this.apiUrl}/update-progress`, body);

 }

}


