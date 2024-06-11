import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: '', redirectTo:'Login', pathMatch:'full'},
    {path: 'Login', component : LoginComponent},
    {path: 'Dashboard', component : DashboardComponent},
    {path: 'Register', component : RegisterComponent},

];
