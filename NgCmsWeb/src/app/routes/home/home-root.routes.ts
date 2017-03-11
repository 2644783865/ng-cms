import { Routes, RouterModule } from '@angular/router';
import { HomeRoot } from './home-root.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '', component: HomeRoot, children: [
      // Add child-routes here
   ]
  },
];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);