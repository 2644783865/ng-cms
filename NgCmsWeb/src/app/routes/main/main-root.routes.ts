import { Routes, RouterModule } from '@angular/router';
import { MainRoot } from './main-root.component';
import { ModuleWithProviders } from '@angular/core';
import { PageBaseComponent } from './../../components/page-base/page-base.component';
export const routes: Routes = [
  {
    path: '', component: MainRoot, children:[]
  },
];

export const MainRoutes: ModuleWithProviders = RouterModule.forChild(routes);