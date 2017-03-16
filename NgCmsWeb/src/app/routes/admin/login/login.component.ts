import { Component } from '@angular/core';
import { GrowlService } from './../../../services/growl-service/growl.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
})

export class Login {
    constructor(private growlService: GrowlService) {
    }
}
