import { Routes, RouterModule } from '@angular/router';
import { MainRoot } from './main-root.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '', component: MainRoot
    , children: [
    ]
  },
];

export const MainRoutes: ModuleWithProviders = RouterModule.forChild(routes);