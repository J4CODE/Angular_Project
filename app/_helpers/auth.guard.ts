import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AccountService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.accountService.userValue;
    if (user) {
      // Is authorized so it returns true
      return true;
    }

    // Is not logged in so will redirect to the login page with the return url
    this.router.navigate(['/account/login'], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
}
