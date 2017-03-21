import { PageService } from '../services/page-service/page.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/first';

@Injectable()

export class CanActivateMain implements CanActivate {

    constructor(private pageService: PageService, private router: Router) {
    }

    public canActivate(): Observable<any> {
        return this.pageService.getPagesWithChildren().map(r => {
            // modify current route-config with new one from service
            this.router.config[0].children = this.pageService.getConfig();

            // reset route-config using new config from pageService and navigate to the requested url
            this.router.resetConfig(this.router.config);
            this.router.navigateByUrl(window.location.pathname);
        }).first();
    }
}
