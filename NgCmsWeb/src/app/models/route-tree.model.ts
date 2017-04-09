import { Serializable } from './../interfaces/serializable.interface';

export class RouteTreeModel implements Serializable<RouteTreeModel> {
    path: string;
    generation: number;
    parentGuid: string;

    deserialize(input) {
        this.path = input.path;
        this.generation = input.generation;
        this.parentGuid = input.parentGuid;

        return this;
    }
}
