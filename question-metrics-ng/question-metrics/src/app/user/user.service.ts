import { Injectable } from '@angular/core';
import { User, LoginInfo } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppSettingsService } from '../app-settings.service';

@Injectable()
export class UserService {
  private baseApiUrl = '';
  private userApiUrl = this.baseApiUrl + 'account/login';

  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService
  ) {
    this.baseApiUrl = this.appSettings.getConfig('question-metrics-api-url');
  }

  public loggedInUser: User = this.getLoggedInUser();

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('loggedInUser') as string) as User;
  }

  LogIn(loginInfo: LoginInfo): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<User>(this.baseApiUrl + this.userApiUrl, loginInfo, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // @ts-ignore
  private handleError(err) {
    if (err.error instanceof ErrorEvent) {
    } else {
    }
    console.error(err);
    return throwError(err);
  }
}
