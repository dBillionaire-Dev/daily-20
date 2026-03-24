import { EventEmitter } from "events";

const emitter = new EventEmitter();

// Listener
emitter.on("greet", (name): void => {
    console.log(`Hello ${name}`);
});

// Emit event
emitter.emit("greet", "Nex");