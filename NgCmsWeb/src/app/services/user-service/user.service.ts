import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    private baseUrl: string;
    constructor(private interceptor: InterceptorService, private router: Router) {
        this.baseUrl = 'api/User/';
    }

    public listUsers() {
        return this.interceptor.get(this.baseUrl + 'List').map(res => {
            return res;
        }).catch( error => {
            return Observable.of(error);
        });
    }
}

