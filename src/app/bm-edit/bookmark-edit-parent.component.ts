import { OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Bookmark } from '../entities/bookmark';
import { BookmarkService } from '../services/bookmark.service';

/**
 * A parent component to edit a bookmark.
 * @author Dmitry Noranovich
 */
export class BookmarkEditParentComponent implements OnInit {
    /** 
     * A bookmark to display.
     */
    bookmark: Bookmark;
    /**
     * A constructor with dependency injection.
     * 
     */
    constructor(private route: ActivatedRoute,
        private bookmarkService: BookmarkService,
        private router: Router) { }
    /**
         * The implementation of the method from OnInit interface.
         */
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let paramId = params['id'];
            if (paramId) {
                let id = +paramId;
                this.bookmarkService.getBookmark(id)
                    .then((bookmark: Bookmark) => this.bookmark = bookmark);
            } else {
                this.bookmark = new Bookmark();
            }
        });
    }
    /**
     * A method to save a bookmark.
     */
    onSubmit(): void {
        if (!this.bookmark.id) {
            // TODO Connect to bookmark service to add.
        }
        // TODO Connect to bookmark service to save.
        this.router.navigate(['']);
    }
}
