import {Routes, NavigationExtras, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {BookmarkDetailComponent} from './bm-detail/bookmark-detail.component';
import {BookmarkAddComponent} from './bm-add/bookmark-add.component';

/**
 * Routes.
 */
const appRoutes: Routes = [
    {
        path: 'bookmarks',
        component: BookmarksComponent
    },
    {
        path: 'new',
        component: BookmarkAddComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'detail/:id',
        component: BookmarkDetailComponent
    },
    {
        path: '',
        redirectTo: '/bookmarks',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(appRoutes);