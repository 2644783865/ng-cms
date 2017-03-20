import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: 'page-base2.component.html',
    styleUrls: ['page-base2.component.scss'],
})

export class PageBase2Component {
    constructor() {
        console.log('constructed page-base');
    }
}
