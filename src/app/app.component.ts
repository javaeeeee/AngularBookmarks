import {Component, OnInit, OnDestroy} from '@angular/core';
import { UserService } from './services/user-service';
import { Subscription } from 'rxjs/Subscription';

/**
 * Main app class.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    title: string = 'Bookmarks';
    isAuthenticated: boolean;
    /**
     * Subscribe to messages.
     */
    subscription: Subscription;
    constructor(private userService: UserService) {
        this.subscription = userService.authenticated$.subscribe(
            isAuthenticated => {
                this.isAuthenticated = isAuthenticated;
                console.log('Received authentication message');
            }
        );
    }
    ngOnInit() {
        // this.isAuthenticated = this.userService.isLoggedIn;
        // console.log('isAuthenticated = ' + this.isAuthenticated);
    }
    /**
     * Unsubscribe when destroyed. Implements OnDestroy interface.
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * Method is used to logout.
     */
    logout() {
        this.userService.logout();
    }
}
