import { NgModule } from '@angular/core';
import { ToasterAlertComponent } from './toaster-alert.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, NgbModule],
    exports: [ToasterAlertComponent],
    declarations: [ToasterAlertComponent],
    providers: []
})

export class ToasterAlertModule { }