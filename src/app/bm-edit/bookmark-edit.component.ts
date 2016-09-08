import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookmarkService } from '../services/bookmark.service';
import { BookmarkEditParentComponent } from './bookmark-edit-parent.component';

/**
 * A component to edit a bookmark.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'bm-edit',
    templateUrl: 'app/bm-edit/bookmark-edit.component.html'
})
export class BookmarkEditComponent extends BookmarkEditParentComponent {
    /**
     * A constructor with dependency injection.
     * 
     */
    constructor(route: ActivatedRoute,
        bookmarkService: BookmarkService,
        router: Router) {
        super(route, bookmarkService, router);
    }
}
