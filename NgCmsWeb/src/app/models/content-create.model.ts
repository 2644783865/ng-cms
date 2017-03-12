import {Serializable} from './../interfaces/serializable.interface';

export class ContentCreate implements Serializable<ContentCreate> {
    name: string;
    content: string;

    deserialize(input) {
        this.name = input.name;
        this.content = input.content;

        return this;
    }
}
