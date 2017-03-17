import { NgModule } from '@angular/core';
import { ContentFormComponent } from './content-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GrowlModule } from 'primeng/primeng';
import { CkEditorModule } from './../ck-editor/ck-editor.module';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, GrowlModule, CkEditorModule],
    exports: [ContentFormComponent],
    declarations: [ContentFormComponent],
    providers: [],
})

export class ContentFormModule { }