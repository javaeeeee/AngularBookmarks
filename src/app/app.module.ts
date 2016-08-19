import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BookmarkDetailComponent} from './bm-detail/bookmark-detail.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {BookmarkService} from './services/bookmark.service';
import {routing} from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, BookmarkDetailComponent, BookmarksComponent],
    providers: [BookmarkService],
    bootstrap: [AppComponent]
})
export class AppModule { }
