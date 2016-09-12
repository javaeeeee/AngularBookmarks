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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Imports for the fake backend.
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./mocks/in-memory-data.service');
var app_component_1 = require('./app.component');
var bookmark_detail_component_1 = require('./bm-detail/bookmark-detail.component');
var bookmarks_component_1 = require('./bookmarks/bookmarks.component');
var about_component_1 = require('./about/about.component');
var login_form_component_1 = require('./login/login-form.component');
var bookmark_service_1 = require('./services/bookmark.service');
var user_service_1 = require('./services/user-service');
var app_routing_1 = require('./app.routing');
var register_form_component_1 = require('./register/register-form.component');
var bookmark_view_component_1 = require('./bm-view/bookmark-view.component');
var bookmark_edit_component_1 = require('./bm-edit/bookmark-edit.component');
/**
 * App modules class.
 * @author Dmitry Noranovich
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule,
                angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)
            ],
            declarations: [
                app_component_1.AppComponent,
                bookmark_detail_component_1.BookmarkDetailComponent,
                bookmarks_component_1.BookmarksComponent,
                about_component_1.AboutComponent,
                login_form_component_1.LoginFormComponent,
                register_form_component_1.RegisterFormComponent,
                bookmark_edit_component_1.BookmarkEditComponent,
                bookmark_view_component_1.BookmarkViewComponent
            ],
            providers: [bookmark_service_1.BookmarkService, user_service_1.UserService, app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map