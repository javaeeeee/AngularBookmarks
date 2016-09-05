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
    constructor(private userService: UserService,
        private router: Router) { }
    ngOnInit() {

    }
    onSubmit() {
        this.submitted = true;
        /*
        this.userService
            .login(this.model.username, this.model.password)
            .then((user: User) => this.router.navigate(['']))
            .catch(err => this.router.navigate['login']);
            */
    }
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
