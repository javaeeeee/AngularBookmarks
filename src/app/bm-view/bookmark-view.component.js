"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var bookmark_edit_parent_component_1 = require('../bm-edit/bookmark-edit-parent.component');
/**
 * A component to edit a bookmark.
 * @author Dmitry Noranovich
 */
var BookmarkViewComponent = (function (_super) {
    __extends(BookmarkViewComponent, _super);
    /**
     * A constructor with dependency injection.
     *
     */
    function BookmarkViewComponent(route, bookmarkService, router) {
        _super.call(this, route, bookmarkService, router);
    }
    BookmarkViewComponent = __decorate([
        core_1.Component({
            selector: 'bm-edit',
            templateUrl: 'app/bm-view/bookmark-view.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, bookmark_service_1.BookmarkService, router_1.Router])
    ], BookmarkViewComponent);
    return BookmarkViewComponent;
}(bookmark_edit_parent_component_1.BookmarkEditParentComponent));
exports.BookmarkViewComponent = BookmarkViewComponent;
//# sourceMappingURL=bookmark-view.component.js.map