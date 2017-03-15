import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from './../../services/auth-service/auth.service';

@Component({
    selector: 'register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['register-form.component.scss'],
})

export class RegisterFormComponent {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) {
        this.registerForm = this.fb.group({
            email: [''],
            password: [''],
            confirmPassword: [''],
        });
    }

    register() {
        this.authService.register(
            this.registerForm.controls['email'].value,
            this.registerForm.controls['password'].value,
            this.registerForm.controls['confirmPassword'].value);
    }
}
