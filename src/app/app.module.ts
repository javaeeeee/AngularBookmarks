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
import {BookmarkAddComponent} from './bm-add/bookmark-add.component';
import {routing} from './app.routing';

/**
 * App modules class.
 * @author Dmitry Noranovich
 */
@NgModule({
    imports: [
        BrowserModule, FormsModule, routing, HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent,
        BookmarkDetailComponent,
        BookmarksComponent,
        AboutComponent,
        BookmarkAddComponent,
        LoginFormComponent],
    providers: [BookmarkService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
