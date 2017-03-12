import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users.component';
import { UserService } from './../../../../services/user-service/user.service';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { NcEditableModule } from './../../../../directives/nc-editable/nc-editable.module';

@NgModule({
    imports: [CommonModule, DataTableModule, SharedModule, NcEditableModule],
    exports: [Users],
    providers: [UserService],
    declarations: [Users],
})

export class UsersModule { }
