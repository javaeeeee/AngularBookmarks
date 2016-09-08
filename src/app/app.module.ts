import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Imports for the fake backend.
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './mocks/in-memory-data.service';

import {AppComponent} from './app.component';
import {BookmarkDetailComponent} from './bm-detail/bookmark-detail.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {AboutComponent} from './about/about.component';
import { LoginFormComponent } from './login/login-form.component';
import {BookmarkService} from './services/bookmark.service';
import { UserService } from './services/user-service';
import {routing, appRoutingProviders} from './app.routing';
import { RegisterFormComponent } from './register/register-form.component';
import {BookmarkViewComponent} from './bm-view/bookmark-view.component';
import {BookmarkEditComponent} from './bm-edit/bookmark-edit.component';

/**
 * App modules class.
 * @author Dmitry Noranovich
 */
@NgModule({
    imports: [
        BrowserModule, FormsModule, routing, HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        BookmarkDetailComponent,
        BookmarksComponent,
        AboutComponent,
        LoginFormComponent,
        RegisterFormComponent,
        BookmarkEditComponent,
        BookmarkViewComponent
    ],
    providers: [BookmarkService, UserService, appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
