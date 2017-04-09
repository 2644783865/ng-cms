import { Serializable } from './../interfaces/serializable.interface';

export class TokenModel implements Serializable<TokenModel> {
    accessToken: string;
    expiresIn: Date;
    tokenType: string;

    deserialize(input) {
        this.accessToken = input.accessToken;
        this.expiresIn = new Date(input.expiresIn);
        this.tokenType = input.tokenType;

        return this;
    }
}
