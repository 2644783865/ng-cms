import { Serializable } from './../interfaces/serializable.interface';

export class RegisterModel implements Serializable<RegisterModel> {
    email: string;
    password: string;
    confirmPassword: string;

    deserialize(input) {
        this.email = input.email;
        this.password = input.password;
        this.confirmPassword = input.confirmPassword;

        return this;
    }
}
