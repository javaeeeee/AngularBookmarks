import {Injectable} from '@angular/core';

import {Bookmark} from '../entities/bookmark';
import {BOOKMARKS} from '../mocks/mock-bookmarks';

@Injectable()
export class BookmarkService {
    getBookmarks(): Promise<Bookmark[]> {
        return Promise.resolve(BOOKMARKS);
    }
}