import { Serializable } from './../interfaces/serializable.interface';

export class TokenModel implements Serializable<TokenModel> {
    accessToken: string;
    expiresIn: Date;

    deserialize(input) {
        this.accessToken = input.accessToken;
        this.expiresIn = new Date(input.expiresIn);
        return this;
    }
}
