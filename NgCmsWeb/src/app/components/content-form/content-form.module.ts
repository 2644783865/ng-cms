import { NgModule } from '@angular/core';
import { ContentFormComponent } from './content-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GrowlModule } from 'primeng/primeng';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, GrowlModule, CKEditorModule],
    exports: [ContentFormComponent],
    declarations: [ContentFormComponent],
    providers: [],
})

export class ContentFormModule { }