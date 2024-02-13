import { Injectable } from '@angular/core';
import { User } from 'app/global/models';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private mainUser: User = {
    userName: 'master8@lemoncode.net',
    password: '12345678',
  };

  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userName: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    null
  );

  login(user: User): Observable<boolean> {
    this.logout();
    const { userName, password } = user;
    const checkLogin =
      userName === this.mainUser.userName &&
      password === this.mainUser.password;

    return of(checkLogin).pipe(
      delay(1500),
      tap(() => {
        if (checkLogin) {
          localStorage.setItem('user', JSON.stringify(user));
          this.changeUserName(user.userName);
        }
        this.changedLoggedIn(checkLogin);
      })
    );
  }

  logout(): void {
    localStorage.clear();
    this.changedLoggedIn(false);
    this.changeUserName(null);
  }

  changedLoggedIn(islogged: boolean): void {
    this.isLogged.next(islogged);
  }

  changeUserName(userName: string | null): void {
    this.userName.next(userName);
  }
}
