import { NgModule } from '@angular/core';
import { AuthorizedRoot } from './authorized-root.component';
import { MainModule } from './main/main.module';
import { AuthorizedRoutes } from './authorized-root.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, MainModule, AuthorizedRoutes],
    exports: [AuthorizedRoot],
    declarations: [AuthorizedRoot]
})

export class AuthorizedRootModule { }
