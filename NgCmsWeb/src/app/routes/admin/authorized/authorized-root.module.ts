import { AuthorizedRoot } from './authorized-root.component';
import { AuthorizedRoutes } from './authorized-root.routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, AuthorizedRoutes],
    exports: [AuthorizedRoot],
    declarations: [AuthorizedRoot]
})

export class AuthorizedRootModule { }
