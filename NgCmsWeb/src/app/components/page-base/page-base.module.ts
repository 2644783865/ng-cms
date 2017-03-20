import { NgModule } from '@angular/core';
import { PageBaseComponent } from './page-base.component';
import { CommonModule } from '@angular/common';
import {PageBase2Component} from './../page-base2/page-base2.component';
import {PageBase2Module} from './../page-base2/page-base2.module';
@NgModule({
    imports: [CommonModule, PageBase2Module],
    exports: [PageBaseComponent],
    declarations: [PageBaseComponent],
    providers: [],
    entryComponents: [PageBase2Component]
})

export class PageBaseModule { }