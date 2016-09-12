"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var Subject_1 = require('rxjs/Subject');
var mock_user_1 = require('../mocks/mock-user');
require('rxjs/add/operator/map');
/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
/**
 * A service that provides access to authentication and manipulation of the user's profile data.
 * @autor Dmitry Noranovich
 */
var UserService = (function () {
    /**
     * Constructor with Http injection for the purposes of accessing rest API.
     */
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        /**
         * A variable to send messages about logIn status.
         */
        this.authedSource = new Subject_1.Subject();
        /**
         * Observable
         */
        this.authenticated$ = this.authedSource.asObservable();
        /**
         * A variable that showes that a user was logged in.
         */
        this.loggedIn = false;
    }
    /**
     * A method used for authentication.
     * @return user profile data.
     */
    // Union Type
    UserService.prototype.login = function (username, password) {
        if (username === 'javaeeeee' && password === '1') {
            this.isLoggedIn = true;
            return Promise.resolve(mock_user_1.USER);
        }
        else {
            this.isLoggedIn = false;
            return Promise.reject(new Error('Wrong Credentials. Please try again.'));
        }
    };
    /**
      * A method used to log out.
      */
    UserService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
    };
    /**
     * Implementation of the method from the CanActivate interface.
     */
    UserService.prototype.canActivate = function (route, state) {
        if (this.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        /**
         * A method used to check whether the user is logged in.
         * @return login status
         */
        get: function () {
            return this.loggedIn;
        },
        /**
         * The setter for the loggedIn flag; sends the message about the flag's state change.'
         */
        set: function (loggedIn) {
            this.authedSource.next(loggedIn);
            this.loggedIn = loggedIn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A method to register users.
     */
    UserService.prototype.register = function (user) {
        this.isLoggedIn = true;
        this.router.navigate(['']);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map