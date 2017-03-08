import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class InterceptorService {
    public baseUrl: string;

    constructor(private router: Router, private http: Http) {
        this.baseUrl = 'http://localhost:53203/';
    }

    // Generic GET-request
    public get<T>(path: string, options?: RequestOptionsArgs) {
        let headers = new Headers();

        headers.append('Access-Control-Allow-Origin', 'true');

        // If token exists, append it to authorization-header 
        if (localStorage.getItem('token') !== null) {
            headers.append('Authorization', 'Bearer ' +
                JSON.parse(localStorage.getItem('token')).accessToken);
        }

        // Use options if passed, otherwhise use above headers instead
        options = options || { headers: headers };

        return this.http.get(this.baseUrl + path, options).map(res => {
            if (this.hasJsonHeader(res.headers)) {
                return res.json();
            }
            return res;
        });
    }

    // Generic POST-request w/ token included in header
    public post<T>(path: string, body: string, options?: RequestOptionsArgs) {
        let headers = new Headers();

        headers.append('Access-Control-Allow-Origin', 'true');
        headers.append('Content-Type', 'application/json');

        // If token exists, append it to authorization-header 
        if (localStorage.getItem('token') !== null) {
            headers.append('Authorization', 'Bearer ' +
                JSON.parse(localStorage.getItem('token')).accessToken);
        }

        // In-case of specific request; ignore headers and use parameter instead
        options = options || { headers: headers };

        return this.http.post(this.baseUrl + path, body, options).map(res => {
            if (this.hasJsonHeader(res.headers)) {
                return res.json();
            }
            return res;
        });
    }

    private hasJsonHeader(headers) {
        return (headers.has('content-type') && headers.get('content-type').search('application/json') !== -1)
            || (headers.has('Content-Type') && headers.get('Content-Type').search('application/json') !== -1);
    }
}
