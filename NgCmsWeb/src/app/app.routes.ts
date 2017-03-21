import { MainRoot } from './routes/main/main-root.component';
import { CanActivateMain } from './guards/main.guard';
import { Routes, RouterModule } from '@angular/router';
import { AdminRootModule } from './routes/admin/admin-root.module';
import { MainRootModule } from './routes/main/main-root.module';
import { PageResolve } from './resolvers/page.resolve';

export const routes: Routes = [
    // need to resolve for everything in order to have routes when nav to /2 etc
    { path: '', component: MainRoot },
    { path: 'admin', loadChildren: 'app/routes/admin/admin-root.module#AdminRootModule' },
    { path: '**', component: MainRoot, canActivate: [CanActivateMain]},
];

export const routing = RouterModule.forRoot(routes);
