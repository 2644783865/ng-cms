import { EmitterService } from '../../../../services/emitter-service/emitter.service';
import { RouteModel } from '../../../../models/route.model';
import { RouteConfigModel } from '../../../../models/route-config.model';
import { RouteService } from '../../../../services/route-service/route.service';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: 'manage-routes.component.html',
    styleUrls: ['manage-routes.component.scss'],
})

export class ManageRoutes implements OnInit{
    routeForm: FormGroup;

    constructor(private fb: FormBuilder, private routeService: RouteService) {
        routeService.getRoutes().subscribe(res => {
            this.routeService.updateRouteTree(res);
        });
        this.routeForm = this.fb.group({
            parentRouteGuid: [''],
            path: ['']
        });
    }

    ngOnInit(){
        EmitterService.emitter('removedRoute').subscribe(res => {
            // todo: set to root instead when functionality to default-create a root is added
            this.routeForm.controls['parentRouteGuid'].setValue(undefined);
        });
    }

    addRoute() {
        this.routeService.createRoute(this.routeForm.value).subscribe(res => {
            this.routeService.routes.push(res);
            this.routeService.updateRouteTree(this.routeService.routes);
        });
    }
}
