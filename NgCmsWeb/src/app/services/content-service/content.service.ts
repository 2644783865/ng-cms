import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { Observable } from 'rxjs/Observable';
import { ContentModel } from './../../models/content.model';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContentService {
    public contentArr: ContentModel[] = [];
    public contentLoaded: boolean = false;
    private baseUrl: string;
    constructor(private interceptor: InterceptorService, private router: Router) {
        this.baseUrl = 'api/Content/';
    }

    public getContentForPage(page) {
        this.contentLoaded = false;
        this.getContentByPage(page).subscribe(res => {
            this.contentArr = res;
            this.contentLoaded = true;
        });
    }

    public getContent() {
        return this.interceptor.get(this.baseUrl).map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getContentByGuid(guid) {
        return this.interceptor.get(this.baseUrl + 'GetByGuid/' + guid).map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getContentByName(name) {
        return this.interceptor.get(this.baseUrl + 'GetByName/' + name).map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getContentByPage(guid) {
        return this.interceptor.get(this.baseUrl + 'GetByPage/' + guid).map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getContentByPaths(model) {
        return this.interceptor.post(this.baseUrl + 'GetByPaths', JSON.stringify(model));
    }

    public createContent(model) {
        return this.interceptor.post(this.baseUrl + 'Create', JSON.stringify(model));
    }

    public updateContent(model) {
        return this.interceptor.post(this.baseUrl + 'Update', JSON.stringify(model));
    }
}

