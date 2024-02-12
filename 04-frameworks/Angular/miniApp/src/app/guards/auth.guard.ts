import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot} from '@angular/router'
import { LoginService } from 'app/services/login.service';

export const AuthGuard = (next: ActivatedRouteSnapshot) => {
  const loginService = inject(LoginService);
  return loginService.isLogged
}
