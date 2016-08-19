import {Routes, RouterModule} from '@angular/router';

import {BookmarksComponent} from './bookmarks/bookmarks.component';

const appRoutes: Routes = [
    {
        path: 'bookmarks',
        component: BookmarksComponent
    },
    {
        path:'',
        redirectTo:'/bookmarks',
        pathMatch:'full'
    }
];

export const routing = RouterModule.forRoot(appRoutes);