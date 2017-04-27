import { AdminRoot } from './admin-root.component';
import { AdminRoutes } from './admin-root.routes';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, LoginModule, AdminRoutes],
    exports: [AdminRoot],
    declarations: [AdminRoot]
})

export class AdminRootModule { }
