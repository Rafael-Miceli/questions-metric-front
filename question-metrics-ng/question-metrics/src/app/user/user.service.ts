import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('loggedInUser')) as User;
  }

  LogIn(): User {
    return JSON.parse(localStorage.getItem('loggedInUser')) as User;
  }
}
