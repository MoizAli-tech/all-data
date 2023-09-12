const express = require("express")
require("./pusher")();
const app = express();

console.log(pusher)

app.listen(3000, () => {
    console.log("listening on port ")
})