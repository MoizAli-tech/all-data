const Pusher = require("pusher");



function pusherConfig() {
    const pusherConfigration = {
        appId: "1643258",
        key: "762fdbf5ad0ae10fc987",
        secret: "b9978cb963936178c584",
        cluster: "ap2",
        useTLS: true
    }

    const pusher = new Pusher(pusherConfigration);

    pusher.trigger("my-channel", "my-event", {
        message: "hello world"
    });
}

module.exports = pusherConfig;