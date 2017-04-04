import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    private baseUrl: string;
    constructor(private interceptor: InterceptorService, private router: Router) {
        this.baseUrl = 'api/User/';
    }

    // todo: implement functions to manage users
}