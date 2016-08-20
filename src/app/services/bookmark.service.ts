import {Injectable} from '@angular/core';

import {Bookmark} from '../entities/bookmark';
import {BOOKMARKS} from '../mocks/mock-bookmarks';

/**
 * A service to inject a bookmark list to components.
 * @author Dmitry Noranovich 
 */
@Injectable()
export class BookmarkService {
    /**
     * Method used to ontain the list of bookmarks.
     */
    getBookmarks(): Promise<Bookmark[]> {
        return Promise.resolve(BOOKMARKS);
    }
    /**
     * A method to find a bookmark by id.
     */
    getBookmark(id: number): Promise<Bookmark> {
        return this.getBookmarks()
            .then(bookmarks => bookmarks.find(bookmark => bookmark.id === id));
    }
}