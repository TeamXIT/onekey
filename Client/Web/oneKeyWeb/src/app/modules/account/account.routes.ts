import { Routes } from '@angular/router'

const AccountComponent = () =>
  import('./account.component').then(c => c.AccountComponent)

export const routes: Routes = [
  { path: '', loadComponent: AccountComponent, children: [] },
]
