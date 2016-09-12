import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Bookmark} from '../entities/Bookmark';
import {BookmarkService} from '../services/bookmark.service';

/**
 * A component to display list of bookmarks.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'bookmarks',
    templateUrl: './bookmarks.component.html',
    providers: []
})
export class BookmarksComponent implements OnInit {
    /**
     * A variable which stores list selection state.
     */
    private selected = false;
    /**
     * List of bookmarks.
     +*/
    bookmarks: Bookmark[];
    /**
     * Variable used to store a selected bookmark in the list.
     */
    selectedBookmark: Bookmark;
    /**
     * Constructor.
     * @argument bookmarkService external service used to obtain bookmarks.
     */
    constructor(private bookmarkService: BookmarkService,
        private router: Router) { }
    /**
     * The implementation of the method from OnInit interface.
     */
    ngOnInit(): void {
        this.getBookmarks();
    }
    /**
     * Extracts bookmarks from promise.
     */
    getBookmarks(): void {
        this.bookmarkService.getBookmarks().then(bookmarks => this.bookmarks = bookmarks);
    }
    /**
     * A method used to redirect to bookmark detail page.
     */
    gotoDetail(bm: Bookmark): void {
        let link = ['/view', bm.id];
        this.router.navigate(link);
    }
    /**
     * A method to view a bookmark.
     */
    gotoEdit(bm: Bookmark): void {
        this.router.navigate(['/edit', bm.id]);
    }
    /**
     * A method to select a bookmark.
     */
    change(): void {

    }
    /**
     * A method to select all bookmarks.
     */
    changeAll(): void {
        this.selected = !this.selected;
        this.bookmarks.forEach(bm => bm.selected = this.selected);
    }
}
