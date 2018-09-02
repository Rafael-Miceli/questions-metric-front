import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadLoggedInUser = '[User] Load Logged In User',
  LogInUser = '[User] Logging In'
}

export class LoadLoggedInUser implements Action {
  readonly type = UserActionTypes.LoadLoggedInUser;
}

export class LogInUser implements Action {
  readonly type = UserActionTypes.LoadLoggedInUser;
}
