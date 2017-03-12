import {Serializable} from './../interfaces/serializable.interface';

export class Content implements Serializable<Content> {
    guid: string;
    name: string;
    content: string;

    deserialize(input) {
        this.guid = input.guid;
        this.name = input.name;
        this.content = input.content;

        return this;
    }
}
