import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user-service';

/**
 * A component to serve the registration form.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'register-form',
    templateUrl: 'app/register/register-form.component.html'
})
/**
 * Method performs user registration and redirects to the home page in the case of success.
 */
export class RegisterFormComponent {
    /**
     * User login.
     */
    username: string;
    /**
     * User full name.
     */
    fullName: string;
    /**
     * User e-mail.
     */
    email: string;
    /**
     * User password.
     */
    password: string;
    /**
     * User password repeated.
     */
    password2: string;
    /**
     * The constructor with injection.
     */
    constructor(private router: Router,
        private userService: UserService) {
        this.router.navigate(['']);
    }
    onSubmit(): void {
        this.userService.isLoggedIn = true;
        this.router.navigate(['']);
    }
}
