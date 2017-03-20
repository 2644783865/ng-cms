import { PageBaseModule } from '../../components/page-base/page-base.module';
import { PageBaseComponent } from '../../components/page-base/page-base.component';
import { PageBase2Component } from '../../components/page-base2/page-base2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoot } from './main-root.component';
import { MainRoutes } from './main-root.routes';

import { RouterModule} from '@angular/router';
@NgModule({
    imports: [ RouterModule.forChild([
      { path: 'goo', component: PageBaseComponent }
    ]), CommonModule, PageBaseModule],
    exports: [MainRoot],
    declarations: [MainRoot],
    entryComponents: [PageBase2Component]
})

export class MainRootModule { }
