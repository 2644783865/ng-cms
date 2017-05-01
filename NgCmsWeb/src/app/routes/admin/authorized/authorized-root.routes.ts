import { AuthorizedRoot } from './authorized-root.component';
import { ManageRoutes } from './manage-routes/manage-routes.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', component: AuthorizedRoot, children: [
            {
                path:
                'manage-routes',
                component: ManageRoutes
            }
        ]
    },
];

export const AuthorizedRoutes: ModuleWithProviders = RouterModule.forChild(routes);