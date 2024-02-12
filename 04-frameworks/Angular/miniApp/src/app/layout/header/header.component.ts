import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { Observable, pipe, tap, filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  userName$!: Observable<string | null>;
  loginService = inject(LoginService);

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName(): void {
    this.userName$ = this.loginService.userName
  }

  logout(): void {
    this.loginService.logout();
  }
}
