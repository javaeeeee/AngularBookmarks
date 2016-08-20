import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Bookmark} from '../entities/bookmark';
import {BookmarkService} from '../services/bookmark.service';

/**
 * A component to manipulate bookmark details.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'bookmark-detail',
    templateUrl: './app/bm-detail/bookmark-detail.component.html'
})
export class BookmarkDetailComponent implements OnInit {
    /**
     * A constructor.
     * 
     */
    constructor(private bookmarkService: BookmarkService, private route: ActivatedRoute) { }
    /** 
     * A bookmark to display.
     */
    bookmark: Bookmark;
    /**
     * The implementation of the method from OnInit interface.
     */
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.bookmarkService.getBookmark(id)
                .then((bookmark: Bookmark) => this.bookmark = bookmark);
        });
    }
    /**
     * A method that uses browser's Go Back button for navigation.
     */
    goBack(): void {
        window.history.back();
    }
}