import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Bookmark} from '../entities/bookmark';

/**
* Headers for POST and PUT HTTP methods.
*/
const HEADERS = new Headers(
    { 'Content-Type': 'application/json' }
);
/**
 * A service to inject a bookmark list to components.
 * @author Dmitry Noranovich 
 */
@Injectable()
export class BookmarkService {
    /**
     * A URL to a bookmarks service
     */
    private bookmarksURL = 'app2/bookmarks';
    /**
     * Constructor with injection.
     */
    constructor(private http: Http) { }
    /**
     * Method used to ontain the list of bookmarks.
     */
    getBookmarks(): Promise<Bookmark[]> {
        return this.http.get(this.bookmarksURL)
            .toPromise()
            .then((response: Response) => response.json().data as Bookmark[])
            .catch(this.handleError);
    }
    /**
     * A method used to add bookmarks.
     */
    private addBookmark(bm: Bookmark): Promise<Bookmark> {
        return this.http.post(this.bookmarksURL, JSON.stringify(bm), { headers: HEADERS })
            .toPromise().then(response => response.json().data).catch(this.handleError);
    }
    /**
     * A method to edit a bookmark.
     */
    private editBookmark(bm: Bookmark): Promise<Bookmark> {
        const url = this.getUrlWithId(bm.id);
        return this.http.put(url, JSON.stringify(bm), { headers: HEADERS })
            .toPromise()
            .then(() => bm)
            .catch(this.handleError);
    }
    /**
     * A method to delete a bookmark.
     */
    deleteBookmark(bm: Bookmark): Promise<Response> {
        const url = this.getUrlWithId(bm.id);
        return this.http.delete(url, { headers: HEADERS })
            .toPromise()
            .catch(this.handleError);
    }
    /**
     * A method which relies on addBookmark and editBookmark methods 
     * and provides a single point of access for save operations.
     */
    save(bm: Bookmark): Promise<Bookmark> {
        if (bm.id) {
            return this.editBookmark(bm);
        }
        return this.addBookmark(bm);
    }
    /**
     * A method to append an id to the URL in order to access particular bookmarks.
     */
    private getUrlWithId(id: number): string {
        return `${this.bookmarksURL}/${id}`;
    }
    /**
     * A method to hndle errors when communicationg with a backend.
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
    /**
     * A method to find a bookmark by id.
     */
    getBookmark(id: number): Promise<Bookmark> {
        return this.getBookmarks()
            .then(bookmarks => bookmarks.find(bookmark => bookmark.id === id));
    }
}
