import { Routes } from '@angular/router'

const AuthComponent = () =>
  import('./auth.component').then(c => c.AuthComponent)

const LoginComponent = () =>
  import('./login/login.component').then(c => c.LoginComponent)

const RegisterComponent = () =>
  import('./register/register.component').then(c => c.RegisterComponent)

export const routes: Routes = [
  {
    path: '',
    loadComponent: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadComponent: LoginComponent },
      { path: 'register', loadComponent: RegisterComponent },
    ],
  },
]
