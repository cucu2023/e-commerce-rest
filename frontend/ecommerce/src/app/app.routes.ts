import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
export const routes: Routes = [
    {path: 'login', component: LoginComponent, title: 'Login' },
    {path: '', redirectTo: 'login', pathMatch: 'full' },
];
