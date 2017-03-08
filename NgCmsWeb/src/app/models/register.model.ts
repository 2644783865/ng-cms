import { Serializable } from './../interfaces/serializable.interface';

export class Register implements Serializable<Register> {
    // TODO: Change to camelcase
    Email: string;
    Password: string;
    ConfirmPassword: string;

    deserialize(input) {
        this.Email = input.Email;
        this.Password = input.Password;
        this.ConfirmPassword = input.ConfirmPassword;
        return this;
    }
}
