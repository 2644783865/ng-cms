import { Component, Input } from '@angular/core';

@Component({
    selector: 'route-treeview',
    templateUrl: 'route-treeview.component.html',
    styleUrls: ['route-treeview.component.scss'],
})

export class RouteTreeviewComponent {
    @Input() routeTree: any[];
    constructor() { }
}
