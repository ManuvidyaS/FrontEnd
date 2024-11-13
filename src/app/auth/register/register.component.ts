import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.password === this.confirmPassword) {
      const observer: Observer<any> = {
        next: (response) => console.log('Registration successful', response),
        error: (error) => console.error('Registration failed', error),
        complete: () => console.log('Registration request completed'),
      };

      this.authService.register(this.email, this.password).subscribe(observer);
    } else {
      console.error('Passwords do not match');
    }
  }
}
