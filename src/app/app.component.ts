import {Component} from '@angular/core';

/**
 * Main app class.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    title: string = "Bookmarks";
}
