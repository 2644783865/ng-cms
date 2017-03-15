import { Routes, RouterModule } from '@angular/router';
import { AuthorizedRoot } from './authorized-root.component';
import { ModuleWithProviders } from '@angular/core';
import { Content } from './content/content.component';
import { Users } from './users/users.component';
import { EditContent } from './edit-content/edit-content.component';

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