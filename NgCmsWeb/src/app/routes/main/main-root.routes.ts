import { Routes, RouterModule } from '@angular/router';
import { MainRoot } from './main-root.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '', component: MainRoot, children: [
      // Add child-routes here
   ]
  },
];

export const MainRoutes: ModuleWithProviders = RouterModule.forChild(routes);