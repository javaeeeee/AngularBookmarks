"use strict";
var bookmark_1 = require('../entities/bookmark');
/**
 * A parent component to edit a bookmark.
 * @author Dmitry Noranovich
 */
var BookmarkEditParentComponent = (function () {
    /**
     * A constructor with dependency injection.
     */
    function BookmarkEditParentComponent(route, bookmarkService, router) {
        this.route = route;
        this.bookmarkService = bookmarkService;
        this.router = router;
    }
    /**
    * The implementation of the method from OnInit interface.
    */
    BookmarkEditParentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var paramId = params['id'];
            if (paramId) {
                var id = +paramId;
                _this.bookmarkService.getBookmark(id)
                    .then(function (bookmark) { return _this.bookmark = bookmark; });
            }
            else {
                _this.bookmark = new bookmark_1.Bookmark();
            }
        });
    };
    /**
     * A method to save a bookmark.
     */
    BookmarkEditParentComponent.prototype.onSubmit = function () {
        if (!this.bookmark.id) {
        }
        // TODO Connect to bookmark service to save.
        this.router.navigate(['']);
    };
    return BookmarkEditParentComponent;
}());
exports.BookmarkEditParentComponent = BookmarkEditParentComponent;
//# sourceMappingURL=bookmark-edit-parent.component.js.map