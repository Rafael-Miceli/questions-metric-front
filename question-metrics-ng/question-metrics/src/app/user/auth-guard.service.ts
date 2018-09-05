import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate
} from '@angular/router';

import { UserService } from './user.service';

// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
    console.log('Buscando usuario logado');

    console.log(`usuario logado ${this.userService.loggedInUser}`);

    if (!this.userService.loggedInUser) {
      this.router.navigate(['/login']);
      return false;
    }
    // Retain the attempted URL for redirection
    // this.authService.redirectUrl = url;
    return true;
  }
}
