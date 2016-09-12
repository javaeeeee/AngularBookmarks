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
var router_1 = require('@angular/router');
var bookmark_service_1 = require('../services/bookmark.service');
/**
 * A component to display list of bookmarks.
 * @author Dmitry Noranovich
 */
var BookmarksComponent = (function () {
    /**
     * Constructor.
     * @argument bookmarkService external service used to obtain bookmarks.
     */
    function BookmarksComponent(bookmarkService, router) {
        this.bookmarkService = bookmarkService;
        this.router = router;
        /**
         * A variable which stores list selection state.
         */
        this.selected = false;
    }
    /**
     * The implementation of the method from OnInit interface.
     */
    BookmarksComponent.prototype.ngOnInit = function () {
        this.getBookmarks();
    };
    /**
     * Extracts bookmarks from promise.
     */
    BookmarksComponent.prototype.getBookmarks = function () {
        var _this = this;
        this.bookmarkService.getBookmarks().then(function (bookmarks) { return _this.bookmarks = bookmarks; });
    };
    /**
     * A method used to redirect to bookmark detail page.
     */
    BookmarksComponent.prototype.gotoDetail = function (bm) {
        var link = ['/view', bm.id];
        this.router.navigate(link);
    };
    /**
     * A method to view a bookmark.
     */
    BookmarksComponent.prototype.gotoEdit = function (bm) {
        this.router.navigate(['/edit', bm.id]);
    };
    /**
     * A method to select a bookmark.
     */
    BookmarksComponent.prototype.change = function () {
    };
    /**
     * A method to select all bookmarks.
     */
    BookmarksComponent.prototype.changeAll = function () {
        var _this = this;
        this.selected = !this.selected;
        this.bookmarks.forEach(function (bm) { return bm.selected = _this.selected; });
    };
    BookmarksComponent = __decorate([
        core_1.Component({
            selector: 'bookmarks',
            templateUrl: './app/bookmarks/bookmarks.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [bookmark_service_1.BookmarkService, router_1.Router])
    ], BookmarksComponent);
    return BookmarksComponent;
}());
exports.BookmarksComponent = BookmarksComponent;
//# sourceMappingURL=bookmarks.component.js.map