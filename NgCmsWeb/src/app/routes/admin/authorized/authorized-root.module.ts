import { AuthorizedRoot } from './authorized-root.component';
import { AuthorizedRoutes } from './authorized-root.routes';
import { ContentModule } from './content/content.module';
import { EditContentModule } from './edit-content/edit-content.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, ContentModule, EditContentModule, AuthorizedRoutes],
    exports: [AuthorizedRoot],
    declarations: [AuthorizedRoot]
})

export class AuthorizedRootModule { }
