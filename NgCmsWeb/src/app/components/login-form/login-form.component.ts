import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../../services/auth-service/auth.service';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.scss'],
})

export class LoginFormComponent {
    loginForm: FormGroup;


    constructor(private authService: AuthService) {
        this.loginForm = new FormGroup({
            userName: new FormControl(''),
            password: new FormControl('')
        });
    }

    login() {
        this.authService.login(
            this.loginForm.controls['userName'].value,
            this.loginForm.controls['password'].value);
    }
}
