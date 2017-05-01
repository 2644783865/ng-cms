import { Serializable } from './../interfaces/serializable.interface';

export class MessageModel implements Serializable<MessageModel> {
    guid: string;
    text: string;
    type: string;

    deserialize(input) {
        this.guid = input.guid;
        this.text = input.text;
        this.type = input.type;

        return this;
    }
}
