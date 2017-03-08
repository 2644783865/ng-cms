import { NgModule } from '@angular/core';
import { RegisterFormComponent } from './register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [RegisterFormComponent],
    declarations: [RegisterFormComponent],
    providers: [],
})

export class RegisterFormModule { }