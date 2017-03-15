import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from './content.component';
import { TreeTableModule, SharedModule } from 'primeng/primeng';
import { ContentFormModule } from './../../../../components/content-form/content-form.module';

@NgModule({
    imports: [CommonModule, TreeTableModule, SharedModule, ContentFormModule],
    exports: [Content],
    declarations: [Content],
})

export class ContentModule { }
