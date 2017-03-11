import { NgModule } from '@angular/core';
import { Login } from './login.component';
import { LoginFormModule } from './../../../components/login-form/login-form.module';

@NgModule({
    imports: [LoginFormModule],
    exports: [Login],
    declarations: [Login],
})

export class LoginModule { }
