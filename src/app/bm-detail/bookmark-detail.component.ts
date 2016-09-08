import {Component, Input} from '@angular/core';

import {Bookmark} from '../entities/bookmark';

/**
 * A component to manipulate bookmark details.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'bm-detail',
    templateUrl: './app/bm-detail/bookmark-detail.component.html'
})
export class BookmarkDetailComponent {

    /** 
     * A bookmark to display.
     */
    @Input()
    bookmark: Bookmark;
    /**
     * Field shows if one can edit a bookmark
     */
    @Input()
    isReadonly: boolean;

    /**
     * A method that uses browser's Go Back button for navigation.
     */
    goBack(): void {
        window.history.back();
    }
}
