import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {User} from '../entities/user';
import { UserService } from '../services/user-service';

/**
 * A controller that serves login form.
 * @author Dmitry Noranovich
 */
@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    submitted = false;
    model: User;
    username: string = 'javaeeeee';
    password: string = '1';
    /**
     * Constructor with injection.
     */
    constructor(private userService: UserService,
        private router: Router) { }
    ngOnInit() {

    }
    onSubmit() {
        this.submitted = true;
        this.userService
            .login(this.username, this.password)
            .then((user: User) => {
                this.model = user;
                this.router.navigate(['']);
            })
            .catch(err => console.log(err));
    }
    get diagnostic() {
        return JSON.stringify(this.model);
    }
    /**
     * A method that redirects to the registration form.
     */
    onRegister(): void {
        this.router.navigate(['/register']);
    }
}
