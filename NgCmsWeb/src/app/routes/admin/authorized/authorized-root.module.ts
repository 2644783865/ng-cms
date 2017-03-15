import { NgModule } from '@angular/core';
import { AuthorizedRoot } from './authorized-root.component';
import { ContentModule } from './content/content.module';
import { UsersModule } from './users/users.module';
import { EditContentModule } from './edit-content/edit-content.module';
import { AuthorizedRoutes } from './authorized-root.routes';
import { CommonModule } from '@angular/common';
import { GrowlModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, ContentModule, UsersModule, EditContentModule, AuthorizedRoutes, GrowlModule],
    exports: [AuthorizedRoot],
    declarations: [AuthorizedRoot]
})

export class AuthorizedRootModule { }
