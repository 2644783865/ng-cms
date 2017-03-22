import { MainRoot } from './main-root.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{
    path: '', component: MainRoot
  }
];

export const MainRoutes: ModuleWithProviders = RouterModule.forChild(routes);