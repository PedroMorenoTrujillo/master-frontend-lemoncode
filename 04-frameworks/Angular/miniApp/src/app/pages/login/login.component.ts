import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginForm } from './models';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from 'app/services/login.service';
import { User } from 'app/global/models';
import { Router } from '@angular/router';
import { APPROUTES } from '@enums/app-routes';
import { LoaderComponent } from 'app/components/loader/loader.component';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup<LoginForm>;
  loginService = inject(LoginService);
  router = inject(Router);
  errorMessage: string | null = null;
  isLoading: boolean = false;
  private unsubscribe: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }) as FormGroup<LoginForm>;
  }

  login(): void {
    this.isLoading = true;
    this.loginService
      .login(this.loginForm.value as User)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (value) => {
          if (value) {
            this.router.navigate([APPROUTES.DASHBOARD]);
          } else {
            this.errorMessage = value
              ? null
              : 'User name or password incorrect';
            this.loginForm.reset();
            setTimeout(() => (this.errorMessage = null), 4000);
          }
        },
        complete: () => (this.isLoading = false),
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
