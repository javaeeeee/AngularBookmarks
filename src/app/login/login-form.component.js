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
var router_1 = require('@angular/router');
var user_service_1 = require('../services/user-service');
/**
 * A controller that serves login form.
 * @author Dmitry Noranovich
 */
var LoginFormComponent = (function () {
    /**
     * Constructor with injection.
     */
    function LoginFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
        this.username = 'javaeeeee';
        this.password = '1';
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.userService
            .login(this.username, this.password)
            .then(function (user) {
            _this.model = user;
            _this.router.navigate(['']);
        })
            .catch(function (err) { return console.log(err); });
    };
    Object.defineProperty(LoginFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A method that redirects to the registration form.
     */
    LoginFormComponent.prototype.onRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/login/login-form.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map