import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BookmarkDetailComponent} from './bm-detail/bookmark-detail.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, BookmarkDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
