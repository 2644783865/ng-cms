import { Component } from '@angular/core';
import { RouteNavModel } from './../../models/route-nav.model';

@Component({
    selector: 'sidebar-nav',
    templateUrl: 'sidebar-nav.component.html',
    styleUrls: ['sidebar-nav.component.scss'],
})

export class SidebarNavComponent {
    routes: RouteNavModel[];

    constructor() {
        this.routes = [
            new RouteNavModel().deserialize({
                title: 'Start',
                path: '/admin'
            }),
            new RouteNavModel().deserialize({
                title: 'Go to site',
                path: '/'
            })
        ];
    }
}
