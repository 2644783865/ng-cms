import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { Token } from './../../models/token.model';
import { Register } from './../../models/register.model';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { CanActivateAdmin } from './../../guards/admin.guard';

@Injectable()
export class AuthService {
    private token: Token;
    private _baseUrl: string;
    constructor(private interceptor: InterceptorService, private router: Router) {
        this._baseUrl = 'api/Account/';
    }

    // Saves the token in localStorage
    public setToken(token: any) {
        if (!token.hasOwnProperty('.expires')) {
            token['.expires'] = new Date(new Date().getTime() + token.expires_in * 1000);
        }

        this.token = new Token().deserialize({
            accessToken: token.access_token,
            tokenType: token.token_type,
            expiresIn: new Date(token['.expires'])
        });

        localStorage.setItem('token', JSON.stringify(this.token));
    }

    public login(userName: string, password: string) {
        let headers = new Headers();

        headers.append('Access-Control-Allow-Origin', 'true');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.interceptor.post('token',
            `grant_type=password&username=${userName}&password=${password}`, { headers: headers })
            .subscribe(res => {
                this.setToken(res);
                this.router.navigate(['admin/main']);
            });
    }

    public register(email: string, password: string, confirmPassword: string) {
        let model = new Register().deserialize({ Email: email, Password: password, ConfirmPassword: confirmPassword });

        return this.interceptor.post(this._baseUrl + 'Register', JSON.stringify(model))
            .subscribe(res => {
                this.login(email, password);
            });
    }

    public logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/admin/login']);
    }

    public isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}

