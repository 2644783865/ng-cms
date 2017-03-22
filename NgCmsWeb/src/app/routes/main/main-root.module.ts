import { PageBaseComponent } from '../../components/page-base/page-base.component';
import { PageBaseModule } from '../../components/page-base/page-base.module';
import { MainRoot } from './main-root.component';
import { MainRoutes } from './main-root.routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MainRoutes, CommonModule, PageBaseModule],
    exports: [MainRoot],
    declarations: [MainRoot],
    providers: [],
    entryComponents: [PageBaseComponent]
})

export class MainRootModule { }
