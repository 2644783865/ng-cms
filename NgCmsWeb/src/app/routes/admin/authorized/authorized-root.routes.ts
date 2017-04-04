import { AuthorizedRoot } from './authorized-root.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', component: AuthorizedRoot, children: [
        ]
    },
];

export const AuthorizedRoutes: ModuleWithProviders = RouterModule.forChild(routes);