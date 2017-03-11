import { Routes, RouterModule } from '@angular/router';
import { AuthorizedRoot } from './authorized-root.component';
import { ModuleWithProviders } from '@angular/core';
import { Main } from './main/main.component';

export const routes: Routes = [
    {
        path: '', component: AuthorizedRoot, children: [
            { path: 'main', component: Main },
            { path: '', redirectTo: 'main', pathMatch: 'full' }
        ]
    },
];

export const AuthorizedRoutes: ModuleWithProviders = RouterModule.forChild(routes);