import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {BookmarkViewComponent} from './bm-view/bookmark-view.component';
import {BookmarkEditComponent} from './bm-edit/bookmark-edit.component';
import { LoginFormComponent } from './login/login-form.component';
import { UserService } from './services/user-service';
import {RegisterFormComponent} from './register/register-form.component';

/**
 * Routes.
 */
const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'register',
        component: RegisterFormComponent
    },
    {
        path: 'bookmarks',
        component: BookmarksComponent,
        canActivate: [UserService]
    },
    {
        path: 'new',
        redirectTo: '/edit/',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [UserService]
    },
    {
        path: 'view/:id',
        component: BookmarkViewComponent,
        canActivate: [UserService]
    },
    {
        path: 'edit/:id',
        component: BookmarkEditComponent,
        canActivate: [UserService]
    },
    {
        path: '',
        redirectTo: '/bookmarks',
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
