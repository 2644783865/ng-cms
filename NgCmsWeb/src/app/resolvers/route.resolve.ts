import { RouteService } from '../services/route-service/route.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class RouteResolve implements Resolve<any> {

  constructor(private routeService: RouteService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.routeService.setConfig();
  }
}
