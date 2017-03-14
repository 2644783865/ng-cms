import {Serializable} from './../interfaces/serializable.interface';

export class PageCreate implements Serializable<PageCreate> {
    path: string;

    deserialize(input) {
        this.path = input.path;

        return this;
    }
}
