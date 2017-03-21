import { PageService } from '../services/page-service/page.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { InterceptorService } from '../services/interceptor-service/interceptor.service';
import { AuthService } from '../services/auth-service/auth.service';
import { Observable } from 'rxjs/Observable';
import { PageBaseComponent } from '../components/page-base/page-base.component';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()

export class CanActivateMain implements CanActivate {

    constructor(private pageService: PageService, private router: Router) {
    }

    public canActivate(): Promise<boolean> {
        return new Promise(resolve => {
            this.pageService.getPagesWithChildren()
                .subscribe(menuGroups => {
                    resolve(false);
                    this.router.config[0].children = this.pageService.getConfig();
                    this.router.resetConfig(this.router.config);
                    console.log('constructed routes');
                    this.router.navigateByUrl(window.location.pathname);
                });
        });
    }
}
