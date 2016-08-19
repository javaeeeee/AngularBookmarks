import {Component, OnInit} from '@angular/core';

import {Bookmark} from './entities/bookmark';
import {BookmarkService} from './services/bookmark.service';

/**
 * Main app class.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [BookmarkService]
})
export class AppComponent implements OnInit {
    /**
     * List of bookmarks.
     */
    bookmarks: Bookmark[];
    /**
     * Variable used to store a selected bookmark in the list.
     */
    selectedBookmark: Bookmark;
    /**
     * Constructor.
     * @argument bookmarkService external service used to obtain bookmarks.
     */
    constructor(private bookmarkService: BookmarkService) {

    }
    /**
     * The implementation of the method from OnInit interface.
     */
    ngOnInit(): void {
        this.getBookmarks();
    }
    getBookmarks(): void {
        this.bookmarkService.getBookmarks().then(bookmarks => this.bookmarks = bookmarks);
    }
    /**
     * Method processing select event of the bookmark list.
     * @argument bm selected bookmark.
     */
    onSelect(bm: Bookmark): void {
        this.selectedBookmark = bm;
    }
}
