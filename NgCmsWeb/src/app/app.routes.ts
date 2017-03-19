import { Routes, RouterModule } from '@angular/router';
import { AdminRootModule } from './routes/admin/admin-root.module';
import { MainRootModule } from './routes/main/main-root.module';

export const routes: Routes = [
    { path: '', loadChildren: 'app/routes/main/main-root.module#MainRootModule' },
    { path: 'admin', loadChildren: 'app/routes/admin/admin-root.module#AdminRootModule' }
];

export const routing = RouterModule.forRoot(routes);
