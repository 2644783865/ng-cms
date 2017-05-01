import { ToasterAlertModule } from '../toaster-alert/toaster-alert.module';
import { ToasterContainerComponent } from './toaster-container.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ToasterAlertModule, ReactiveFormsModule],
    exports: [ToasterContainerComponent],
    declarations: [ToasterContainerComponent],
    providers: []
})

export class ToasterContainerModule { }