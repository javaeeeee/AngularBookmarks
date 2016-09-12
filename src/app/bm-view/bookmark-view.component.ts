import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookmarkService } from '../services/bookmark.service';
import { BookmarkEditParentComponent} from '../bm-edit/bookmark-edit-parent.component';

/**
 * A component to edit a bookmark.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'bm-edit',
    templateUrl: './bookmark-view.component.html'
})
export class BookmarkViewComponent extends BookmarkEditParentComponent {
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
