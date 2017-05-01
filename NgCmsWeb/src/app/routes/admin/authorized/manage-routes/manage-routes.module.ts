import { RouteTreeviewModule } from './../../../../components/route-treeview/route-treeview.module';
import { ManageRoutes } from './manage-routes.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouteTreeviewModule],
    exports: [ManageRoutes],
    declarations: [ManageRoutes],
})

export class ManageRoutesModule { }
