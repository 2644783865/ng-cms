import { PageBaseModule } from '../../components/page-base/page-base.module';
import { PageBaseComponent } from '../../components/page-base/page-base.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoot } from './main-root.component';
import { MainRoutes } from './main-root.routes';
import { RouterModule} from '@angular/router';

@NgModule({
    imports: [MainRoutes, CommonModule, PageBaseModule],
    exports: [MainRoot],
    declarations: [MainRoot],
    providers: [],
    entryComponents: [PageBaseComponent]
})

export class MainRootModule { }
