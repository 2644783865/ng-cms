import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoot } from './main-root.component';
import { MainRoutes } from './main-root.routes';

@NgModule({
    imports: [MainRoutes, CommonModule],
    exports: [MainRoot],
    declarations: [MainRoot],
})

export class MainRootModule { }
