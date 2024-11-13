import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,  // Standalone component
  imports: [FormsModule],  // Import FormsModule for ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]  // Ensure AuthService is available in the component
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => console.log('Login successful', response),
      error: (error) => console.error('Login failed', error),
      complete: () => console.log('Login request completed')
    });
  }
}
