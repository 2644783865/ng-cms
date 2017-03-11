import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'admin-root.component.html',
    styleUrls: ['admin-root.component.scss'],
})

export class AdminRoot {
    constructor(private router: Router) {
    }
}