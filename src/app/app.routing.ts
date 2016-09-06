import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {BookmarkDetailComponent} from './bm-detail/bookmark-detail.component';
import {BookmarkAddComponent} from './bm-add/bookmark-add.component';
import { LoginFormComponent } from './login/login-form.component';
import { UserService } from './services/user-service';
import {RegisterFormComponent} from './register/register-form.component';

/**
 * Routes.
 */
const appRoutes: Routes = [
    {
        path: 'bookmarks',
        component: BookmarksComponent,
        canActivate: [UserService]
    },
    {
        path: 'new',
        component: BookmarkAddComponent,
        canActivate: [UserService]
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [UserService]
    },
    {
        path: 'detail/:id',
        component: BookmarkDetailComponent,
        canActivate: [UserService]
    },
    {
        path: '',
        redirectTo: '/bookmarks',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'register',
        component: RegisterFormComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
