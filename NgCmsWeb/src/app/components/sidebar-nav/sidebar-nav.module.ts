import { ManageRoutesModule } from '../../routes/admin/authorized/manage-routes/manage-routes.module';
import { SidebarNavComponent } from './sidebar-nav.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule, ManageRoutesModule],
    exports: [SidebarNavComponent],
    declarations: [SidebarNavComponent],
    providers: [],
})

export class SidebarNavModule { }
