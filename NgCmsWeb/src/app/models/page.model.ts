import {Serializable} from './../interfaces/serializable.interface';

export class Page implements Serializable<Page> {
    guid: string;
    path: string;

    deserialize(input) {
        this.guid = input.guid;
        this.path = input.path;

        return this;
    }
}
