import { GrowlService } from '../../services/growl-service/growl.service';
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
    constructor(private routeService: RouteService, private growlService: GrowlService) {
    }

    removeRoute(route) {
        // disallow removal of root
        if (this.routeService.routes.length === 1) {
            this.growlService.showMessage('Cant remove root-node', 'danger');
            return;
        }
        this.routeService.removeRoute(route).subscribe(res => {
            const foundRoute = this.routeService.routes.find(x => x.guid === route.guid);
            const index: number = this.routeService.routes.indexOf(foundRoute);
            if (index !== -1) {
                this.routeService.routes.splice(index, 1);
            }
            this.routeService.updateRouteTree();
            EmitterService.emitter('removedRoute').emit();
        });

    }
}
