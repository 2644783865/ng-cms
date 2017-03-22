import { LoginFormComponent } from './login-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [LoginFormComponent],
    declarations: [LoginFormComponent],
    providers: [],
})

export class LoginFormModule { }