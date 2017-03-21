import { Routes, RouterModule } from '@angular/router';
import { AdminRootModule } from './routes/admin/admin-root.module';
import { MainRoot } from './routes/main/main-root.component';
import { PageResolve } from './resolvers/page.resolve';

export const routes: Routes = [
    {
        path: '', component: MainRoot,  children: [], resolve: {
            page: PageResolve
        }
    },
    { path: 'admin', loadChildren: 'app/routes/admin/admin-root.module#AdminRootModule' }
];

export const routing = RouterModule.forRoot(routes);
