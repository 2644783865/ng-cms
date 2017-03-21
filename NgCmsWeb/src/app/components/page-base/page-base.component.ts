import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'page-base.component.html',
    styleUrls: ['page-base.component.scss'],
})

export class PageBaseComponent {
    constructor(private route: ActivatedRoute) {
        console.log('constructed /' + route.snapshot.url);
    }
}
