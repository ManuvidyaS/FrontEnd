import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const routes: Routes = [
 { path: 'home-page', component: HomePageComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
 
//   {path: '', redirectTo:'home-page', pathMatch: 'full' }
    
{ path: 'feedback', component: FeedbackComponent },
{path: '', redirectTo:'home-page', pathMatch: 'full' }




];

