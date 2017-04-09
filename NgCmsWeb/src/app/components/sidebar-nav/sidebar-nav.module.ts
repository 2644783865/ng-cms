import { SidebarNavComponent } from './sidebar-nav.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [SidebarNavComponent],
    declarations: [SidebarNavComponent],
    providers: [],
})

export class SidebarNavModule { }
