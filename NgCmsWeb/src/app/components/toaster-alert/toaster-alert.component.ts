import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'toaster-alert',
    templateUrl: 'toaster-alert.component.html',
    styleUrls: ['toaster-alert.component.scss'],
})

export class ToasterAlertComponent {
    @Input() text: string;
    @Input() type: string;
    @Output() onClose: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    dismiss() {
        this.onClose.emit();
    }
}
