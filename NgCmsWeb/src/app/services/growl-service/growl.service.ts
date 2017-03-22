import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Message } from 'primeng/primeng';

@Injectable()
export class GrowlService {
    public messageArr: Message[] = [];

    constructor() {
    }
}

