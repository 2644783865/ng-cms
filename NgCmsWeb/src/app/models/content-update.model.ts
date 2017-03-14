import { Serializable } from './../interfaces/serializable.interface';

export class ContentUpdate implements Serializable<ContentUpdate> {
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
