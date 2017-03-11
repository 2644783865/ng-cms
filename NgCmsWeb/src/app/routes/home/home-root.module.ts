import { NgModule } from '@angular/core';
import { HomeRoot } from './home-root.component';
import { HomeRoutes } from './home-root.routes';

@NgModule({
    imports: [HomeRoutes],
    exports: [HomeRoot],
    declarations: [HomeRoot],
})

export class HomeRootModule { }
