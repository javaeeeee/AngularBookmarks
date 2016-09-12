"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
/**
* Headers for POST and PUT HTTP methods.
*/
var HEADERS = new http_1.Headers({ 'Content-Type': 'application/json' });
/**
 * A service to inject a bookmark list to components.
 * @author Dmitry Noranovich
 */
var BookmarkService = (function () {
    /**
     * Constructor with injection.
     */
    function BookmarkService(http) {
        this.http = http;
        /**
         * A URL to a bookmarks service
         */
        this.bookmarksURL = 'app2/bookmarks';
    }
    /**
     * Method used to ontain the list of bookmarks.
     */
    BookmarkService.prototype.getBookmarks = function () {
        return this.http.get(this.bookmarksURL)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /**
     * A method used to add bookmarks.
     */
    BookmarkService.prototype.addBookmark = function (bm) {
        return this.http.post(this.bookmarksURL, JSON.stringify(bm), { headers: HEADERS })
            .toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    /**
     * A method to edit a bookmark.
     */
    BookmarkService.prototype.editBookmark = function (bm) {
        var url = this.getUrlWithId(bm.id);
        return this.http.put(url, JSON.stringify(bm), { headers: HEADERS })
            .toPromise()
            .then(function () { return bm; })
            .catch(this.handleError);
    };
    /**
     * A method to delete a bookmark.
     */
    BookmarkService.prototype.deleteBookmark = function (bm) {
        var url = this.getUrlWithId(bm.id);
        return this.http.delete(url, { headers: HEADERS })
            .toPromise()
            .catch(this.handleError);
    };
    /**
     * A method which relies on addBookmark and editBookmark methods
     * and provides a single point of access for save operations.
     */
    BookmarkService.prototype.save = function (bm) {
        if (bm.id) {
            return this.editBookmark(bm);
        }
        return this.addBookmark(bm);
    };
    /**
     * A method to find a bookmark by id.
     */
    BookmarkService.prototype.getBookmark = function (id) {
        return this.getBookmarks()
            .then(function (bookmarks) { return bookmarks.find(function (bookmark) { return bookmark.id === id; }); });
    };
    /**
     * A method to append an id to the URL in order to access particular bookmarks.
     */
    BookmarkService.prototype.getUrlWithId = function (id) {
        return this.bookmarksURL + "/" + id;
    };
    /**
     * A method to hndle errors when communicationg with a backend.
     */
    BookmarkService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    BookmarkService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookmarkService);
    return BookmarkService;
}());
exports.BookmarkService = BookmarkService;
//# sourceMappingURL=bookmark.service.js.map