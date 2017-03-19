import { NgModule } from '@angular/core';
import { PageBaseComponent } from './page-base.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [PageBaseComponent],
    declarations: [PageBaseComponent],
    providers: [],
})

export class PageBaseModule { }