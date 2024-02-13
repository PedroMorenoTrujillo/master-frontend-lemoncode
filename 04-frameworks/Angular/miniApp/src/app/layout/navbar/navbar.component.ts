import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
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
export class NavbarComponent implements OnInit, OnDestroy {
  headerRoutes: HeaderRoutes[] = [...routes];
  loginService = inject(LoginService);
  private unsubscribe: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(): void {
    this.loginService.isLogged
      .pipe(
        takeUntil(this.unsubscribe),
        tap(
          (value) =>
            (this.headerRoutes = routesActived(value, this.headerRoutes))
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
