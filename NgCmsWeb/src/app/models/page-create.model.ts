import {Serializable} from './../interfaces/serializable.interface';

export class PageCreateModel implements Serializable<PageCreateModel> {
    path: string;

    deserialize(input) {
        this.path = input.path;

        return this;
    }
}
