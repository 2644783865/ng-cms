import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from './../../services/page-service/page.service';
import { RouteModel } from './../../models/route.model';
import { PageBaseComponent } from './../../components/page-base/page-base.component';
import { routes } from './main-root.routes';

@Component({
    templateUrl: 'main-root.component.html',
    styleUrls: ['main-root.component.scss'],
})

export class MainRoot {
    constructor(private pageService: PageService, private router: Router, route: ActivatedRoute) {
        route.routeConfig.children = this.pageService.getConfig();
    }
}
