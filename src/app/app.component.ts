import {Component, OnInit} from '@angular/core';
import { UserService } from './services/user-service';

/**
 * Main app class.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
    title: string = 'Bookmarks';
    isAuthenticated: boolean;
    constructor(private userService: UserService) { }
    ngOnInit() {
        this.userService.isLoggedIn();
    }
}
