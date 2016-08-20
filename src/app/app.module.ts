import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//Imports for the fake backend.
import {XHRBackend} from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './mocks/in-memory-data.service';

import {AppComponent} from './app.component';
import {BookmarkDetailComponent} from './bm-detail/bookmark-detail.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {AboutComponent} from './about/about.component';
import {BookmarkService} from './services/bookmark.service';
import {routing} from './app.routing';

/**
 * App modules class.
 * @author Dmitry Noranovich
 */
@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule],
    declarations: [AppComponent, BookmarkDetailComponent, BookmarksComponent, AboutComponent],
    providers: [BookmarkService,
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
