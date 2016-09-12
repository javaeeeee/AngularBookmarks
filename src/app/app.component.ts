import {Component, OnInit, OnDestroy} from '@angular/core';
import { UserService } from './services/user-service';
import { Subscription } from 'rxjs/Subscription';

/**
 * Main app class.
 * @author Dmitry Noranovich
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'Bookmarks';
  private authenticated: boolean;
  /**
   * Subscribe to messages.
   */
  subscription: Subscription;
  constructor(private userService: UserService) {
    this.subscription = userService.authenticated$.subscribe(
      authenticated => {
        this.authenticated = authenticated;
      }
    );
  }
  /**
   * Initialization method implementing the one from OnInit interface.
   */
  ngOnInit() {

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

  get isAuthenticated(): boolean {
    return this.authenticated;
  }
}
