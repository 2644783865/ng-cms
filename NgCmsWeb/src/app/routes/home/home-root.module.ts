import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoot } from './home-root.component';
import { HomeRoutes } from './home-root.routes';
import { NcEditableModule } from './../../directives/nc-editable/nc-editable.module';

@NgModule({
    imports: [HomeRoutes, CommonModule, NcEditableModule],
    exports: [HomeRoot],
    declarations: [HomeRoot],
})

export class HomeRootModule { }
