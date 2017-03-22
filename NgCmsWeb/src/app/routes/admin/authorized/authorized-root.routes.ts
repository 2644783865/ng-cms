import { AuthorizedRoot } from './authorized-root.component';
import { Content } from './content/content.component';
import { EditContent } from './edit-content/edit-content.component';
import { Users } from './users/users.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', component: AuthorizedRoot, children: [
            { path: 'content', component: Content },
            { path: '', redirectTo: 'content', pathMatch: 'full' },
            { path: 'users', component: Users },
            { path: 'edit-content/:guid', component: EditContent }
        ]
    },
];

export const AuthorizedRoutes: ModuleWithProviders = RouterModule.forChild(routes);