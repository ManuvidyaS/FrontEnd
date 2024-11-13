import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { NgModel } from '@angular/forms';
import { RegisterComponent } from '../auth/register/register.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink,LoginComponent,RegisterComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {}