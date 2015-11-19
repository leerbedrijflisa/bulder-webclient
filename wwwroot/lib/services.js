import {FakeWebApi} from "lib/fake-web-api";
import {RealWebApi} from "lib/real-web-api";
import {Validation} from 'aurelia-validation';

export class Services {
    static inject() {
        return [FakeWebApi, Validation];
    }
    constructor(webApi, validator) {
        this.webApi = webApi;
        this.validator = validator;
    }
}