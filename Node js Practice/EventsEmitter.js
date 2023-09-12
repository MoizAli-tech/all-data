const EventEmitter = require("events");

const event = new EventEmitter();


event.on("first",(name,sec)=>{

    console.log("i am being called",name,sec);
})

event.emit("first","eventy","moiz")