import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [LoginFormComponent],
    declarations: [LoginFormComponent],
    providers: [],
})

export class LoginFormModule { }