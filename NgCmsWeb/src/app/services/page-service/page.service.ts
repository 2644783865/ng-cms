import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { EmitterService } from './../emitter-service/emitter.service';
import { Observable } from 'rxjs/Observable';
import { Page } from './../../models/page.model';
import { PageCreate } from './../../models/page-create.model';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class PageService {
    public pageArr: Page[] = [];
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
}

