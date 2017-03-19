import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from './content.component';

@NgModule({
    imports: [CommonModule],
    exports: [Content],
    declarations: [Content],
})

export class ContentModule { }
