import {Services} from "lib/services";

export class Login extends Services {
    activate() {
        this.validation = this.validator.on(this)
            .ensure('email')
            .isNotEmpty()
            .isEmail()
            .ensure('password')
            .isNotEmpty();
    }

    submit() {
        this.validation.validate().then(() => {
            var user = {
                email: this.email,
                password: this.password
            };
            this.webApi.authenticate(user);
        }).catch(validationResult => {
            console.log(validationResult);
            this.validationResult = validationResult;
        });
    }
}