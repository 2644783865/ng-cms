import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from './../../services/page-service/page.service';
import { RouteModel } from './../../models/route.model';
import { PageBaseComponent } from './../../components/page-base/page-base.component';

@Component({
    templateUrl: 'main-root.component.html',
    styleUrls: ['main-root.component.scss'],
})

export class MainRoot {
    constructor(private pageService: PageService, private router: Router) {
    }

    ngOnInit() {
        // load pages and apply to route-config
        this.pageService.getPagesWithChildren().subscribe(res => {
            let routes = new Array<RouteModel>();
            debugger;
            res.forEach(p => {
                routes.push(
                    {
                        path: p.path,
                        component: PageBaseComponent,
                        children: p.children
                    }
                );
            });

            debugger;
            this.router.resetConfig(routes);
        });
    }
}
