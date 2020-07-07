import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
/**
 * @class AuthGuard
 * @description for protecting routers when user is not logged in
 */
export class AuthGuard implements CanActivate {
  /**
   * @constructor
   * @param {Router} router router object
   * @param {AuthenticationService} authenticationService object for getting the user token
   */
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  /**
   * @method canActivate
   * @description method to check if router can render or not
   * @return {Boolean}
   */
  canActivate() {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate([ '/login' ]);
    return false;
  }
}
