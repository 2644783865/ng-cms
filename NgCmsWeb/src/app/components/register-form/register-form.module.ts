import { RegisterFormComponent } from './register-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [RegisterFormComponent],
    declarations: [RegisterFormComponent],
    providers: [],
})

export class RegisterFormModule { }