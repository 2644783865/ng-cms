import { AuthService } from './../../services/auth-service/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.scss'],
})

export class LoginFormComponent {
    loginForm: FormGroup;


    constructor(private fb: FormBuilder, private authService: AuthService) {
        this.loginForm = this.fb.group({
            userName: [''],
            password: ['']
        });
    }

    login() {
        this.authService.login(
            this.loginForm.controls['userName'].value,
            this.loginForm.controls['password'].value);
    }
}
