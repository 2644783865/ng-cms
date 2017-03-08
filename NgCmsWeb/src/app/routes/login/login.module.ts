import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginFormModule } from './../../components/login-form/login-form.module';

@NgModule({
    imports: [LoginFormModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
})

export class LoginModule { }
