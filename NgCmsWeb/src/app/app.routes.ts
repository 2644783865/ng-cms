import { MainRoot } from './routes/main/main-root.component';
import { RouteResolve } from './resolvers/route.resolve';
import { Routes, RouterModule } from '@angular/router';
import { AdminRootModule } from './routes/admin/admin-root.module';
import { NotFound } from './routes/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: MainRoot},
    { path: 'admin', loadChildren: 'app/routes/admin/admin-root.module#AdminRootModule' },
    { path: 'not-found', component: NotFound},
    { path: '**', component: NotFound, resolve: {route: RouteResolve}},
];

export const routing = RouterModule.forRoot(routes);
