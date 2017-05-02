import { Serializable } from './../interfaces/serializable.interface';

export class RouteModel implements Serializable<RouteModel> {
    guid: string;
    path: string;
    parentRouteGuid: string;

    deserialize(input) {
        this.guid = input.guid;
        this.path = input.path;
        this.parentRouteGuid = input.parentRouteGuid;

        return this;
    }
}
