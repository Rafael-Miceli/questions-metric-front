import { Injectable } from '@angular/core';
import { User, LoginInfo } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
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
    return JSON.parse(localStorage.getItem('loggedInUser')) as User;
  }

  LogIn(loginInfo: LoginInfo): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<User>(this.baseApiUrl + this.userApiUrl, loginInfo, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}`;
    }
    console.error(err);
    return throwError(err);
  }
}
