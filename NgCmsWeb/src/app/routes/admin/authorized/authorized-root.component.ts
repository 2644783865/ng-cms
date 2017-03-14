import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth-service/auth.service';
import { GrowlService } from './../../../services/growl-service/growl.service';

@Component({
    templateUrl: 'authorized-root.component.html',
    styleUrls: ['authorized-root.component.scss'],
})

export class AuthorizedRoot {
    constructor(private router: Router, private authService: AuthService, private growlService: GrowlService) {
    }

    loggedIn() {
        return this.authService.isLoggedIn();
    }

    logout() {
        return this.authService.logout();
    }
}