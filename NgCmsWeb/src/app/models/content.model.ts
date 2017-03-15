import {Serializable} from './../interfaces/serializable.interface';

export class ContentModel implements Serializable<ContentModel> {
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
