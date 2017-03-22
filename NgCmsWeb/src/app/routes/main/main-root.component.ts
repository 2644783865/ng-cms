import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteService } from './../../services/route-service/route.service';
import { RouteConfigModel } from './../../models/route-config.model';
import { PageBaseComponent } from './../../components/page-base/page-base.component';
import { routes } from './main-root.routes';

@Component({
    templateUrl: 'main-root.component.html',
    styleUrls: ['main-root.component.scss'],
})

export class MainRoot {
    constructor(private routeService: RouteService, private router: Router, activatedRoute: ActivatedRoute) {
        this.routeService.checkRoutes();
    }
}
