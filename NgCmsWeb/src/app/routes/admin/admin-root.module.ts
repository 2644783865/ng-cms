import { NgModule } from '@angular/core';
import { AdminRoot } from './admin-root.component';
import { LoginModule } from './login/login.module';
import { RegisterFormModule } from './../../components/register-form/register-form.module';
import { AdminRoutes } from './admin-root.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, LoginModule, AdminRoutes],
    exports: [AdminRoot],
    declarations: [AdminRoot]
})

export class AdminRootModule { }
