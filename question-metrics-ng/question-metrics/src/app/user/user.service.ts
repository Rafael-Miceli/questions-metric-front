import { Injectable } from '@angular/core';
import { User, LoginInfo } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable()
export class UserService {

  private userApiUrl = 'user/login';

  constructor(private http: HttpClient) {}

  public loggedInUser = this.getLoggedInUser();

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('loggedInUser')) as User;
  }

  LogIn(loginInfo: LoginInfo): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(`Indo fazer login:`, loginInfo);
    return this.http.post<User>(this.userApiUrl, loginInfo, {headers: headers})
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
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
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
