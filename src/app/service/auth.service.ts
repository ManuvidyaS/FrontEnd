// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // This ensures the service is available app-wide
   
})
export class AuthService {
  private loginUrl = 'https://localhost:7722/api/Auth/login';
  private registerUrl = 'https://localhost:7722/api/Auth/register';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { email, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(this.registerUrl, { email, password });
  }
}
