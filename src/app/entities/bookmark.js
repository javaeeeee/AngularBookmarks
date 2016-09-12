"use strict";
/**
 * A class to store Bookmarks.
 * @author Dmitry Noranovich
 */
var Bookmark = (function () {
    function Bookmark(id, url, description, selected) {
        if (id === void 0) { id = null; }
        if (url === void 0) { url = ''; }
        if (description === void 0) { description = ''; }
        if (selected === void 0) { selected = false; }
        this.id = id;
        this.url = url;
        this.description = description;
        this.selected = selected;
    }
    return Bookmark;
}());
exports.Bookmark = Bookmark;
//# sourceMappingURL=bookmark.js.map