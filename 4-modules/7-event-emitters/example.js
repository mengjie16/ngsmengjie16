const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout
const myEmmitter = new EventEmitter();
setImmediate(()=>{
    myEmmitter.emit("test_event");
});


myEmmitter.on("test_event",()=>{
    console.log("test_event is fired ")
});