import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { EmitterService } from './../emitter-service/emitter.service';
import { Observable } from 'rxjs/Observable';
import { PageModel } from './../../models/page.model';
import { PageCreateModel } from './../../models/page-create.model';
import { PageBaseComponent } from './../../components/page-base/page-base.component';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class PageService {
    public pages: any;
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
            console.log('fetched pages');
            this.pages = res;
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getConfig() {
        return [{
                    path: '1', component: PageBaseComponent
                },
                {
                    path: '2', component: PageBaseComponent
                }];
    }

    public getPagesWithContent() {
        return this.interceptor.get(this.baseUrl + 'GetPagesWithContent').map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }
}
