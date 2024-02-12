import { Routes } from '@angular/router';
import { APPROUTES } from '@enums/index';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: APPROUTES.HOME,
    pathMatch: 'full',
  },
  {
    path: APPROUTES.HOME,
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: APPROUTES.LOGIN,
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: APPROUTES.ABOUT,
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: APPROUTES.DASHBOARD,
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    canMatch: [AuthGuard],
  },
  {
    path: APPROUTES.GALERY,
    loadComponent: () =>
      import('./pages/galery/galery.component').then((c) => c.GaleryComponent),
    canMatch: [AuthGuard],
  },
  {
    path: APPROUTES.CRUD,
    loadComponent: () =>
      import('./pages/crud/crud.component').then((c) => c.CrudComponent),
    canMatch: [AuthGuard],
  },
  {
    path: APPROUTES.PROFILE,
    loadComponent: () =>
      import('./pages/profile/profile.component').then(
        (c) => c.ProfileComponent
      ),
    canMatch: [AuthGuard],
  },
  { path: '**', redirectTo: '/' },
];
