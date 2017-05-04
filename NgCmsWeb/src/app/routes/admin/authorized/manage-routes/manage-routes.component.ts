import { RouteCreateModel } from '../../../../models/route-create.model';
import { EmitterService } from '../../../../services/emitter-service/emitter.service';
import { RouteModel } from '../../../../models/route.model';
import { RouteConfigModel } from '../../../../models/route-config.model';
import { RouteService } from '../../../../services/route-service/route.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: 'manage-routes.component.html',
    styleUrls: ['manage-routes.component.scss'],
})

export class ManageRoutes implements OnInit {
    routeForm: FormGroup;
    rootRoute: RouteModel;

    constructor(private fb: FormBuilder, private routeService: RouteService) {
        this.routeForm = this.fb.group({
            parentRouteGuid: [''],
            path: ['']
        });
    }

    ngOnInit() {
        this.routeService.getRoutes().subscribe(res => {
            if (res.length > 0) {
                this.routeService.updateRouteTree();
                this.rootRoute = res.find(x => x.parentRouteGuid === null);
                this.setRootRoute();
                return;
            }
            // if no route exists, create a default-root
            const root = new RouteCreateModel().deserialize({
                path: 'root'
            });
            this.routeService.createRoute(root).subscribe(result => {
                this.routeService.routes.push(result);
                this.routeService.updateRouteTree();
                this.rootRoute = result;
                this.setRootRoute();
            });
        });
        EmitterService.emitter('removedRoute').subscribe(res => {
            let value = undefined;
            if (this.rootRoute !== undefined) {
                value = this.rootRoute.guid;
            }
            this.routeForm.controls['parentRouteGuid'].setValue(value);
        });
    }

    setRootRoute() {
        this.routeForm.controls['parentRouteGuid'].setValue(this.rootRoute.guid);
    }

    addRoute() {
        this.routeService.createRoute(this.routeForm.value).subscribe(res => {
            this.routeService.routes.push(res);
            this.routeService.updateRouteTree();
        });
    }
}
