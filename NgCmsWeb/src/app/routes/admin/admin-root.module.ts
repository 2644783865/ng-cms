import { AdminRoot } from './admin-root.component';
import { AdminRoutes } from './admin-root.routes';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToasterContainerModule } from './../../components/toaster-container/toaster-container.module';

@NgModule({
    imports: [CommonModule, LoginModule, AdminRoutes, ToasterContainerModule],
    exports: [AdminRoot],
    declarations: [AdminRoot]
})

export class AdminRootModule { }
