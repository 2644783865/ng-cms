import { EmitterService } from '../../services/emitter-service/emitter.service';
import { RouteService } from '../../services/route-service/route.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'route-treeview',
    templateUrl: 'route-treeview.component.html',
    styleUrls: ['route-treeview.component.scss'],
})

export class RouteTreeviewComponent {
    @Input() routeTree: any[];
    constructor(private routeService: RouteService) {
    }

    removeRoute(route) {
        this.routeService.removeRoute(route).subscribe(res => {
            this.routeService.updateRouteTree(this.routeService.routes);
            EmitterService.emitter('removedRoute').emit();
        });
    }
}
