import { Routes, RouterModule } from '@angular/router';
import { AuthorizedRoot } from './authorized-root.component';
import { ModuleWithProviders } from '@angular/core';
import { Main } from './main/main.component';
import { Users } from './users/users.component';
import { EditContent } from './edit-content/edit-content.component';

export const routes: Routes = [
    {
        path: '', component: AuthorizedRoot, children: [
            { path: 'main', component: Main },
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            { path: 'users', component: Users },
            { path: 'edit-content/:guid', component: EditContent }
        ]
    },
];

export const AuthorizedRoutes: ModuleWithProviders = RouterModule.forChild(routes);