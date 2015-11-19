export class FakeWebApi {

    constructor() {
        this.channels = [
            { partitionKey: "Kanaal #1", administrators: "Max Verboom" }
        ];
        this.messages = [
            { author: "Max Verboom", text: "Dit is een test-bericht."}
        ];
        this.users = [];
    }

    authenticate(user) {

    }

    getChannels() {
        var _this = this;
        return new Promise (function(resolve, reject) {
            resolve({ content :_this.channels});
        });
    }

    getMessages() {
        var _this = this;
        return new Promise (function(resolve, reject) {
            resolve({ content :_this.messages});
        });
    }

    addMessage(message) {
        this.messages.push(message);
    }

    addUser(user) {
        this.users.push(user);
    }

    addChannel(channel) {
        this.channels.push(channel);
    }
}