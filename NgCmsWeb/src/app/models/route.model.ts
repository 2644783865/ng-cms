import { Serializable } from './../interfaces/serializable.interface';

export class RouteModel implements Serializable<RouteModel> {
    guid: string;
    path: string;

    deserialize(input) {
        this.guid = input.guid;
        this.path = input.path;

        return this;
    }
}
