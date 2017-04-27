import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';

@Injectable()
export class GrowlService {
    public messageArr: any[] = [];

    constructor() {
    }
}

