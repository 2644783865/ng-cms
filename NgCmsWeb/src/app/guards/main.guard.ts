import { PageService } from '../services/page-service/page.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class CanActivateMain implements CanActivate {

    constructor(private pageService: PageService, private router: Router) {
    }

    public canActivate(): Promise<boolean> {
        return new Promise(resolve => {
            this.pageService.getPagesWithChildren()
                .subscribe(res => {
                    resolve(false);

                    // modify current route-config with new one from service
                    this.router.config[0].children = this.pageService.getConfig();

                    // reset route-config using new config from pageService and navigate to the requested url
                    this.router.resetConfig(this.router.config);
                    this.router.navigateByUrl(window.location.pathname);
                });
        });
    }
}
