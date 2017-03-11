import { Routes, RouterModule } from '@angular/router';
import { AdminRootModule } from './routes/admin/admin-root.module';
import { HomeRootModule } from './routes/home/home-root.module';

export const routes: Routes = [
    { path: '', loadChildren: 'app/routes/home/home-root.module#HomeRootModule' },
    { path: 'admin', loadChildren: 'app/routes/admin/admin-root.module#AdminRootModule' }
];

export const routing = RouterModule.forRoot(routes);
