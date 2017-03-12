import { Component, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'edit-content.component.html',
    styleUrls: ['edit-content.component.scss'],
})

export class EditContent {
    ncName: string;
    constructor(private route: ActivatedRoute) {
        this.ncName = this.route.snapshot.params['nc-name'];
    }
}
