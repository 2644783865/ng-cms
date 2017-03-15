import { Serializable } from './../interfaces/serializable.interface';

export class ContentCreateModel implements Serializable<ContentCreateModel> {
    name: string;
    content: string;
    path: string;

    deserialize(input) {
        this.name = input.name;
        this.content = input.content;
        this.path = input.path;

        return this;
    }
}
