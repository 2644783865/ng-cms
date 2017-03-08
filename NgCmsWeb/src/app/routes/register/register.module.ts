import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterFormModule } from './../../components/register-form/register-form.module';

@NgModule({
    imports: [RegisterFormModule],
    exports: [RegisterComponent],
    declarations: [RegisterComponent]
})

export class RegisterModule { }
