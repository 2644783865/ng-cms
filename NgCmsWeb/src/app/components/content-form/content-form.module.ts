import { NgModule } from '@angular/core';
import { ContentFormComponent } from './content-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GrowlModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, GrowlModule],
    exports: [ContentFormComponent],
    declarations: [ContentFormComponent],
    providers: [],
})

export class ContentFormModule { }