import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import {PageBase2Component} from './../page-base2/page-base2.component';
@Component({
    templateUrl: 'page-base.component.html',
    styleUrls: ['page-base.component.scss'],
})

export class PageBaseComponent {
    constructor(activatedRoute: ActivatedRoute) {
        console.log('constructed page-base');
        activatedRoute.routeConfig.children = [
            {
                path: 'path2',
                component: PageBase2Component
            }
        ];
    }
}
