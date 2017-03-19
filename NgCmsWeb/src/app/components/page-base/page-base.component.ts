import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: 'page-base.component.html',
    styleUrls: ['page-base.component.scss'],
})

export class PageBaseComponent {
    constructor() {
        console.log('constructed page-base');
    }
}
