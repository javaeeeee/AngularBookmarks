import {Component, Input} from '@angular/core';

import {Bookmark} from '../entities/bookmark';

/**
 * A component to manipulate bookmark details.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'bookmark-detail',
    templateUrl: './app/bm-detail/bookmark-detail.component.html'
})
export class BookmarkDetailComponent {
    /** 
     * A bookmark to display.
     */
    @Input() bookmark: Bookmark;
}