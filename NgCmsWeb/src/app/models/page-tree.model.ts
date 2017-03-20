import {Serializable} from './../interfaces/serializable.interface';

export class PageTreeModel implements Serializable<PageTreeModel> {
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
