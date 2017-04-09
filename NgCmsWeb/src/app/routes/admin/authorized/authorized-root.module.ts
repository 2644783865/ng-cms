import { SidebarNavModule } from '../../../components/sidebar-nav/sidebar-nav.module';
import { AuthorizedRoot } from './authorized-root.component';
import { AuthorizedRoutes } from './authorized-root.routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, AuthorizedRoutes, SidebarNavModule],
    exports: [AuthorizedRoot],
    declarations: [AuthorizedRoot]
})

export class AuthorizedRootModule { }
