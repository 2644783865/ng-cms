import { RouteConfigModel } from '../../../../models/route-config.model';
import { RouteService } from '../../../../services/route-service/route.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: 'manage-routes.component.html',
    styleUrls: ['manage-routes.component.scss'],
})

export class ManageRoutes {
    routeForm: FormGroup;
    routes: RouteConfigModel[];

    constructor(private fb: FormBuilder, private routeService: RouteService) {
        routeService.getRoutes().subscribe(res => {
            this.routes = routeService.constructRouteTree(res);
        });
        this.routeForm = this.fb.group({
            path: ['']
        });
    }

    addRoute() {
        console.log(this.routeForm.value);

        // todo: add call to create route
    }
}
