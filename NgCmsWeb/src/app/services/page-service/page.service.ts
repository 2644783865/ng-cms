import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { EmitterService } from './../emitter-service/emitter.service';
import { Observable } from 'rxjs/Observable';
import { PageModel } from './../../models/page.model';
import { RouteModel } from './../../models/route.model';
import { PageCreateModel } from './../../models/page-create.model';
import { PageBaseComponent } from './../../components/page-base/page-base.component';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class PageService {
    public pages: RouteModel[] = [];
    public pageArr: PageModel[] = [];
    private baseUrl: string;

    constructor(private interceptor: InterceptorService, private router: Router) {
        this.baseUrl = 'api/Page/';
    }

    public getPageByPath(model) {
        const path = { path: model };
        return this.interceptor.post(this.baseUrl + 'GetByPath', JSON.stringify(path));
    }

    public createPage(model) {
        return this.interceptor.post(this.baseUrl + 'Create', JSON.stringify(model));
    }

    public getPagesWithChildren() {
        return this.interceptor.get(this.baseUrl + 'GetPagesWithChildren').map(res => {
            let routes = this.treeify(res, 'guid', 'parentPageGuid', 'children');

            // set pages based on api-response
            this.pages = routes[0].children;
            
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getConfig() {
        return this.pages;
    }

    public getPagesWithContent() {
        return this.interceptor.get(this.baseUrl + 'GetPagesWithContent').map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    treeify(list, idAttr, parentAttr, childrenAttr) {
        if (!idAttr) idAttr = 'guid';
        if (!parentAttr) parentAttr = 'parentPageGuid';
        if (!childrenAttr) childrenAttr = 'children';

        var treeList = [];
        var lookup = {};
        list.forEach(function (obj) {
            lookup[obj[idAttr]] = obj;
            obj[childrenAttr] = [];
        });
        list.forEach(function (obj) {
            if (obj[parentAttr] != null) {
                lookup[obj[parentAttr]][childrenAttr].push(new RouteModel(obj.path, PageBaseComponent, obj.children));
            } else {
                treeList.push(new RouteModel(obj.path, PageBaseComponent, obj.children));
            }
        });
        return treeList;
    };
}
