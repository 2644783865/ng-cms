import { Serializable } from './../interfaces/serializable.interface';

export class Register implements Serializable<Register> {
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
