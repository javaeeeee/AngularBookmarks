import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {User} from '../entities/user';
import { UserService } from '../services/user-service';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    submitted = false;
    model: User;
    username: string;
    password: string;
    constructor(private userService: UserService,
        private router: Router) { }
    ngOnInit() {

    }
    onSubmit() {
        this.submitted = true;
        console.log('Submit form');
        this.userService
            .login(this.username, this.password)
            .then((user: User) => {
                this.model = user; console.log('Redirecting...'); this.router.navigate(['']);
            })
            .catch(err => console.log(err));
    }
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
