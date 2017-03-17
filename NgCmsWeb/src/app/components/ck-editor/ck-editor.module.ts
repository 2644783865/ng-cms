import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CkEditorComponent } from './ck-editor.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [CkEditorComponent],
    declarations: [CkEditorComponent],
    providers: [],
})

export class CkEditorModule { }