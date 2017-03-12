import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContentService {

    private _baseUrl: string;
    constructor(private interceptor: InterceptorService, private router: Router) {
        this._baseUrl = 'api/Content/';
    }

    public getContentByName(name) {
        return this.interceptor.get(this._baseUrl + 'GetByName/' + name).map(res => {
            return res;
        }).catch(error => {
            return Observable.of(error);
        });
    }

    public createContent(content) {
        return this.interceptor.post(this._baseUrl + 'Create', JSON.stringify(content));
    }
}

