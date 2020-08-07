import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtPayload } from '../models/jwtPayload';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivateChild {

  jwtHelperService = new JwtHelperService();

  constructor(private route: Router) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const tokenBase64 = localStorage.getItem('access_token');
    // tslint:disable-next-line: deprecation
    if (isNullOrUndefined(tokenBase64)) {
      this.route.navigate(['/account/login']);
      return false;
    }
    const token = atob(tokenBase64);
    const jwt = this.jwtHelperService.decodeToken(token) as JwtPayload;
    const dataExpiration = new Date(jwt.exp);
    const tokenInvalid = new Date() <= dataExpiration;
    // tslint:disable-next-line: deprecation
    if (tokenInvalid) {
      this.route.navigate(['/account/login']);
      return false;
    }
    return true;
  }

}
