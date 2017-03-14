import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { InterceptorService } from './../interceptor-service/interceptor.service';
import { Observable } from 'rxjs/Observable';
import { Message } from 'primeng/primeng';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class GrowlService {
    public messageArr: Message[] = [];

    constructor() {
    }
}

