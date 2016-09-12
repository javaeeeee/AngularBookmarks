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
var user_1 = require('../entities/user');
var user_service_1 = require('../services/user-service');
/**
 * A component to serve the registration form.
 * @author Dmitry Noranovich
 */
var RegisterFormComponent = (function () {
    /**
     * The constructor with injection.
     */
    function RegisterFormComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    RegisterFormComponent.prototype.onSubmit = function () {
        var user = new user_1.User(null, this.username, this.password, this.fullName, this.email);
        this.userService.register(user);
    };
    RegisterFormComponent = __decorate([
        core_1.Component({
            selector: 'register-form',
            templateUrl: 'app/register/register-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=register-form.component.js.map