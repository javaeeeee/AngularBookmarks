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
var user_service_1 = require('./services/user-service');
/**
 * Main app class.
 * @author Dmitry Noranovich
 */
var AppComponent = (function () {
    function AppComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.title = 'Bookmarks';
        this.subscription = userService.authenticated$.subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    /**
     * Initialization method implementing the one from OnInit interface.
     */
    AppComponent.prototype.ngOnInit = function () {
    };
    /**
     * Unsubscribe when destroyed. Implements OnDestroy interface.
     */
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * Method is used to logout.
     */
    AppComponent.prototype.logout = function () {
        this.userService.logout();
    };
    Object.defineProperty(AppComponent.prototype, "isAuthenticated", {
        get: function () {
            return this.authenticated;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map