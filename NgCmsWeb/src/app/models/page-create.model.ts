import { Serializable } from './../interfaces/serializable.interface';

export class RouteCreateModel implements Serializable<RouteCreateModel> {
    path: string;

    deserialize(input) {
        this.path = input.path;

        return this;
    }
}
