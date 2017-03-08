import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { MemberComponent } from './routes/member/member.component';
import { AdminComponent } from './routes/admin/admin.component';
import { CanActivateAdmin } from './guards/admin.guard';
import { CanActivateMember } from './guards/member.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'member', canActivate: [CanActivateMember], component: MemberComponent },
    { path: 'admin', canActivate: [CanActivateAdmin], component: AdminComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
