import { CanActivateAdmin } from './../../guards/admin.guard';
import { AdminRoot } from './admin-root.component';
import { Login } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', component: AdminRoot, children: [
            { path: 'login', component: Login },
            { path: '', canActivate: [CanActivateAdmin], loadChildren: 'app/routes/admin/authorized/authorized-root.module#AuthorizedRootModule' }
        ]
    },
];

export const AdminRoutes: ModuleWithProviders = RouterModule.forChild(routes);