import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../services/user-service/user.service';

@Component({
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.scss'],
})

export class Users {
    users: any = [];
    test: any;
    constructor(private userService: UserService) {
        this.test = '343434';
    }

    ngOnInit() {
        this.userService.listUsers().subscribe(res => {
            this.users = res;
        })
    }
}
