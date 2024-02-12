import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { Observable, tap } from 'rxjs';
import { HeaderRoutes } from '../header/models';
import { routes, routesActived } from '../header/tools';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  headerRoutes: HeaderRoutes[] = [...routes];
  loginService = inject(LoginService);

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(): void {
    this.loginService.isLogged
      .pipe(
        tap(
          (value) =>
            (this.headerRoutes = routesActived(value, this.headerRoutes))
        )
      )
      .subscribe();
  }
}
