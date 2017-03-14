import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from './../../../../services/user-service/user.service';

@Component({
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.scss'],
})

export class Users implements OnInit {
    users: any = [];
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.listUsers().subscribe(res => {
            this.users = res;
        })
    }
}
