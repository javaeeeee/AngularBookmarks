import {Component, Input} from '@angular/core';

import {Bookmark} from '../entities/bookmark';

@Component({
    selector: 'bookmark-detail',
    templateUrl: './app/bm-detail/bookmark-detail.component.html'
})
export class BookmarkDetailComponent {
    @Input() bookmark: Bookmark;
}