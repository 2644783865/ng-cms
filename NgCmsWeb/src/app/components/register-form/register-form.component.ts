import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../../services/auth-service/auth.service';

@Component({
    selector: 'register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['register-form.component.scss'],
})

export class RegisterFormComponent {
    registerForm: FormGroup;

    constructor(private authService: AuthService) {
        this.registerForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl(''),
            confirmPassword: new FormControl('')
        });
    }

    register() {
        this.authService.register(
            this.registerForm.controls['email'].value,
            this.registerForm.controls['password'].value,
            this.registerForm.controls['confirmPassword'].value);
    }
}
