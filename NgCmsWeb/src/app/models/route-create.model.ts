import { Serializable } from './../interfaces/serializable.interface';

export class RouteCreateModel implements Serializable<RouteCreateModel> {
    path: string;
    parentRouteGuid: string;

    deserialize(input) {
        this.path = input.path;
        this.parentRouteGuid = input.parentRouteGuid;

        return this;
    }
}
