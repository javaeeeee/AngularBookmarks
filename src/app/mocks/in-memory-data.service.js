"use strict";
/**
 * A class used for mockin a backend.
 * @author Dmitry Noranovich
 */
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var bookmarks = [
            {
                id: 1,
                url: 'http://github.com',
                description: 'A lot of great projects.'
            },
            {
                id: 2,
                url: 'http://economist.com',
                description: 'Cool reading'
            },
            {
                id: 3,
                url: 'http://time.com',
                description: 'Some news'
            }
        ];
        return { bookmarks: bookmarks };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map