import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

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
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, BookmarkDetailComponent, BookmarksComponent, AboutComponent],
    providers: [BookmarkService],
    bootstrap: [AppComponent]
})
export class AppModule { }
