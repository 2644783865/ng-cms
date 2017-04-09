import { Serializable } from './../interfaces/serializable.interface';

export class RouteNavModel implements Serializable<RouteNavModel> {
    title: string;
    path: string;

    deserialize(input) {
        this.title = input.title;
        this.path = input.path;

        return this;
    }
}
