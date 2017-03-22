import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ContentModel } from './../../models/content.model';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContentService {
    public contentArr: ContentModel[] = [];
    public contentLoaded: boolean = false;
    private _baseUrl: string;

    constructor(private interceptor: InterceptorService, private router: Router) {
        this._baseUrl = 'api/Content/';
    }

    public getContentForRoute(route) {
        this.contentLoaded = false;
        this.getContentByRoute(route).subscribe(res => {
            this.contentArr = res;
            this.contentLoaded = true;
        });
    }

    public getContent() {
        return this.interceptor.get(this._baseUrl).map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getContentByGuid(guid) {
        return this.interceptor.get(this._baseUrl + 'GetByGuid/' + guid).map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getContentByName(name) {
        return this.interceptor.get(this._baseUrl + 'GetByName/' + name).map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getContentByRoute(guid) {
        return this.interceptor.get(this._baseUrl + 'GetByRoute/' + guid).map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public getContentByPaths(model) {
        return this.interceptor.post(this._baseUrl + 'GetByPaths', JSON.stringify(model));
    }

    public createContent(model) {
        return this.interceptor.post(this._baseUrl + 'Create', JSON.stringify(model));
    }

    public updateContent(model) {
        return this.interceptor.post(this._baseUrl + 'Update', JSON.stringify(model));
    }
}

