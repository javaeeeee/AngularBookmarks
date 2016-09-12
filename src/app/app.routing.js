"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about/about.component');
var bookmarks_component_1 = require('./bookmarks/bookmarks.component');
var bookmark_view_component_1 = require('./bm-view/bookmark-view.component');
var bookmark_edit_component_1 = require('./bm-edit/bookmark-edit.component');
var login_form_component_1 = require('./login/login-form.component');
var user_service_1 = require('./services/user-service');
var register_form_component_1 = require('./register/register-form.component');
/**
 * Routes.
 */
var appRoutes = [
    {
        path: 'login',
        component: login_form_component_1.LoginFormComponent
    },
    {
        path: 'register',
        component: register_form_component_1.RegisterFormComponent
    },
    {
        path: 'bookmarks',
        component: bookmarks_component_1.BookmarksComponent,
        canActivate: [user_service_1.UserService]
    },
    {
        path: 'new',
        redirectTo: '/edit/',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        canActivate: [user_service_1.UserService]
    },
    {
        path: 'view/:id',
        component: bookmark_view_component_1.BookmarkViewComponent,
        canActivate: [user_service_1.UserService]
    },
    {
        path: 'edit/:id',
        component: bookmark_edit_component_1.BookmarkEditComponent,
        canActivate: [user_service_1.UserService]
    },
    {
        path: '',
        redirectTo: '/bookmarks',
        pathMatch: 'full'
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map