import { CkEditorComponent } from './ck-editor.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [CkEditorComponent],
    declarations: [CkEditorComponent],
    providers: [],
})

export class CkEditorModule { }