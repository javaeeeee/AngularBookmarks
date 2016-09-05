import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {User} from '../entities/user';
import {USER} from '../mocks/mock-user';

import 'rxjs/add/operator/map';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
/**
 * A service that provides access to authentication and manipulation of the user's profile data.
 * @autor Dmitry Noranovich
 */
@Injectable()
export class UserService implements CanActivate {
  /**
   * A variable that showes that a user was logged in.
   */
  private loggedIn = false;
  /**
   * A variable used to store profile data.
   */
  user: User;
  /**
   * Constructor with Http injection for the purposes of accessing rest API.
   */
  constructor(private http: Http, private router: Router) { }

  /**
   * A method used for authentication.
   * @return user profile data.
   */
  login(username: string, password: string): Promise<any> {
    if (username === 'javaeeeee' && password === '1') {
      this.loggedIn = true;
      return Promise.resolve(USER);
    } else {
      this.loggedIn = false;
      return Promise.reject(new Error('Wrong Credentials. Please try again.'));
    }
  }
  /**
    * A method used to log out.
    */
  logout(): void {
    this.loggedIn = false;
  }
  /** 
   * A method used to check whether the user is logged in. 
   * @return login status
   */
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  /**
   * Implementation of the method from the CanActivate interface. 
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

