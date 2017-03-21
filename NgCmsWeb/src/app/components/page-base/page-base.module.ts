import { NgModule } from '@angular/core';
import { PageBaseComponent } from './page-base.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [PageBaseComponent],
    declarations: [PageBaseComponent],
    providers: []
})

export class PageBaseModule { }