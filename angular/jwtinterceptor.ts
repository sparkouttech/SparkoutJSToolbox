import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
/**
 * @class JwtInterceptor
 * @description for intercepting http request to include jwt token
 */
export class JwtInterceptor implements HttpInterceptor {
  /**
   * @constructor
   * @param {AuthenticationService} authenticationService param to get current loggedin user details
   */
  constructor(private authenticationService: AuthenticationService) { }

  /**
   * @method intercept
   * @description interceptor to intercept the request
   * @param {HttpRequest} request request object from http
   * @param {HttpHandler} next handler object from http
   * @return {Observable} return api request with jwt token attached to header
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const currentUser = this.authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.authorization;
    const isApiUrl = request.url.startsWith(environment.BASE_URL);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser._id}:${currentUser.authorization}`,
        },
      });
    }

    return next.handle(request);
  }
};
