import { GrowlService } from '../../services/growl-service/growl.service';
import { Component } from '@angular/core';

@Component({
    selector: 'toaster-container',
    templateUrl: 'toaster-container.component.html',
    styleUrls: ['toaster-container.component.scss'],
})

export class ToasterContainerComponent {
    constructor(private growlService: GrowlService) {
    }
}
