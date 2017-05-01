import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { PageBaseComponent } from './../../components/page-base/page-base.component';
import { RouteConfigModel } from './../../models/route-config.model';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RouteService {
    public routeConfig: RouteConfigModel[] = [];
    private baseUrl: string;

    constructor(private interceptor: InterceptorService, private router: Router) {
        this.baseUrl = 'api/Route/';
    }

    public getRouteByPath(model) {
        const path = { path: model };
        return this.interceptor.post(this.baseUrl + 'GetByPath', JSON.stringify(path));
    }

    // public getRoutes() {
    //     const url = this.baseUrl + 'GetRoutes';

    //     return this.interceptor.get(url).catch(error => {
    //         return Observable.throw(error || 'backend server error');
    //     });
    // }

    // todo: implement in backend
    public createRoute(model) {
        return this.interceptor.post(this.baseUrl + 'Create', JSON.stringify(model));
    }

    public setConfig() {
        if (this.routeConfig.length !== 0) {
            // no path found, go back to root
            this.router.navigate(['/not-found']);
            return Observable.of(null);
        }
        return this.interceptor.get(this.baseUrl + 'GetRoutes').map(res => {
            const routeTree = this.constructRouteTree(res);
            console.log(routeTree);
            // set routes based on api-response
            this.routeConfig = routeTree[0].children;
            this.router.config[0].children = this.routeConfig;

            // reset route-config using new config from routeService and navigate to the requested url
            this.router.resetConfig(this.router.config);
            this.router.navigateByUrl(window.location.pathname);
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getRoutes() {
        return this.interceptor.get(this.baseUrl + 'GetRoutes').map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getConfig() {
        return this.routeConfig;
    }

    public checkRoutes() {
        // if config is not set by wild-card route (if the user navigates directly to root)
        if (this.routeConfig.length === 0) {
            this.setConfig().subscribe();
        }
    }

    constructRouteTree(routes) {
        const idAttr = 'guid';
        const parentAttr = 'parentRouteGuid';
        const childrenAttr = 'children';
        const routeTree = [];
        const lookup = {};

        routes.forEach(function (obj) {
            lookup[obj[idAttr]] = obj;
            obj[childrenAttr] = [];
        });

        routes.forEach(function (obj) {
            if (obj[parentAttr] != null) {
                lookup[obj[parentAttr]][childrenAttr].push(new RouteConfigModel(obj.path, PageBaseComponent, obj.children));
            } else {
                routeTree.push(new RouteConfigModel(obj.path, PageBaseComponent, obj.children));
            }
        });
        return routeTree;
    };
}
