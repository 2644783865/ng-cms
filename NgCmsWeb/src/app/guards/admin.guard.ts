import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { AuthService } from '../services/auth-service/auth.service';
import { InterceptorService } from '../services/interceptor-service/interceptor.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CanActivateAdmin implements CanActivate {
    private _baseUrl: string;
    constructor(private interceptorService: InterceptorService,
        private authService: AuthService, private router: Router) {
        this._baseUrl = 'api/Auth/';
    }

    canActivate() {
        return this.interceptorService.get(this._baseUrl + 'IsAdmin').map(res => {
            if (res) {
                return true;
            } else {
                this.authService.logout();
            }
        }).catch(error => {
            this.authService.logout();
            return Observable.of(error);
        });
    }

    checkActivate() {
        return this.interceptorService.get(this._baseUrl + 'IsAdmin').map(res => {
            return res;
        }).catch(error => {
            this.authService.logout();
            return Observable.of(error);
        });
    }
}
