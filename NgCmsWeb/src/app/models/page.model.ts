import {Serializable} from './../interfaces/serializable.interface';

export class PageModel implements Serializable<PageModel> {
    guid: string;
    path: string;

    deserialize(input) {
        this.guid = input.guid;
        this.path = input.path;

        return this;
    }
}
