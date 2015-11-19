import {Services} from "lib/services";

export class Login extends Services {
    submit() {
        var user = {
            email: this.email,
            password: this.password
        };
        this.webApi.authenticate(user);
    }
}