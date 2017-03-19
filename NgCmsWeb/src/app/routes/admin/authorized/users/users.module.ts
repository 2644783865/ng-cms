import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users.component';
import { UserService } from './../../../../services/user-service/user.service';

@NgModule({
    imports: [CommonModule],
    exports: [Users],
    providers: [UserService],
    declarations: [Users],
})

export class UsersModule { }
