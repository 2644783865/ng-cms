import { Routes, RouterModule } from '@angular/router';
import { AdminRoot } from './admin-root.component';
import { ModuleWithProviders } from '@angular/core';
import { RegisterFormComponent } from './../../components/register-form/register-form.component';
import { Login } from './login/login.component';
import { CanActivateAdmin } from './../../guards/admin.guard';

export const routes: Routes = [
    {
        path: '', component: AdminRoot, children: [
            { path: 'login', component: Login },
            { path: '', canActivate: [CanActivateAdmin], loadChildren: 'app/routes/admin/authorized/authorized-root.module#AuthorizedRootModule' }
        ]
    },
];

export const AdminRoutes: ModuleWithProviders = RouterModule.forChild(routes);