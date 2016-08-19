import {Component} from '@angular/core';

/**
 * A class to store Bookamrks.
 */
export class Bookmark {
    /**
     * Bookmark id.
     */
    public id: number;
    /**
     * Bookmark URL.
     */
    public url: string;
    /**
     * Bookmark description.
     */
    public description: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    bookmark: Bookmark = {
        id: 1,
        url: "http://github.com",
        description: "A lot of great projects."
    };
}
