import { Routes } from '@angular/router'

const authRoutes = () =>
  import('./modules/auth/auth.routes').then(m => m.routes)
const accountRoutes = () =>
  import('./modules/account/account.routes').then(m => m.routes)

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', loadChildren: authRoutes },
  { path: 'account', loadChildren: accountRoutes },
  { path: '**', redirectTo: 'auth' },
]
