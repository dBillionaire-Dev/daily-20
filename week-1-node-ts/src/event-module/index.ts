import { EventEmitter } from "events";

const emitter = new EventEmitter();

/**
 * EventEmitter is a class in Node.js that allows you to create and manage events.
 * It provides methods to emit events and register listeners for those events.
 * In this example, we create an instance of EventEmitter, register a listener for the "greet" event, and then emit the "greet" event with a name as an argument.
 *
 * BASIC FLOW:
 * 1. Import the EventEmitter class from the 'events' module.
 * 2. Create an instance of EventEmitter.
 * 3. Use the `on` method to register a listener for a specific event (e.g., "greet").
 * 4. Use the `emit` method to trigger the event and pass any necessary arguments to the listeners.
 * 5. The registered listeners will be called with the provided arguments when the event is emitted.
 *
 * STEPS:
 * 1. Create an instance of EventEmitter, e.g const emitter = new EventEmitter();
 * 2. Register a listener for a specific event using the `on` method, e.g emitter.on("greet", (name) => { ... });
 * 3. Emit the event using the `emit` method, passing any necessary arguments to the listeners, e.g emitter.emit("greet", "Nex");
 * 4. The registered listeners will be called with the provided arguments when the event is emitted.
 *
 * OTHER METHODS INCLUDE:
 * * emitter.once() to handle events only once
 * * emitter.removeListener() to remove the specified listener
 */

// Listener
emitter.on("greet", (name: string): void => {
    console.log(`Hello ${name}`);
});

// Emit event
emitter.emit("greet", "Nex");

//Always Use Named Functions for Better Stack Traces
const onUserLogin = (username: string, time: Date): void => {
    console.log(`[LOG]: ${username} just logged in at ${time}`);
}

const onAdminFirstLogin = (): void => {
    console.log("[LOG]: Admin just logged in for the first time");
}

const onUserLogout = (username: string): void => {
    console.log(`[LOG]: User logged out: ${username}`);
}

console.log("\n--- Simulating User Login/Logout Events ---\n");

emitter.on("userLogin", onUserLogin);
emitter.once("userLogin", onAdminFirstLogin);
emitter.on("userLogout", onUserLogout);

emitter.emit("userLogin", "Nex", new Date().toLocaleTimeString());
emitter.emit("userLogin", "Impulse", new Date().toLocaleTimeString());
emitter.emit("userLogout", "Nex");

//This removes the login listener, hence any new login won't be logged
emitter.removeListener("userLogin", onUserLogin);
console.log("\n--- Login Listener Removed ---\n");

//Nezer won't be logged to the console when logged in
emitter.emit("userLogin", "Nezer", new Date().toLocaleTimeString());
emitter.emit("userLogout", "Impulse");

/**
 * EXPECTED OUTPUT:
 * --- Simulating User Login/Logout Events ---
 *
 * [LOG]: Nex just logged in at 9:34:57 PM
 * [LOG]: Admin just logged in for the first time
 * [LOG]: Impulse just logged in at 9:34:58 PM
 * [LOG]: User logged out: Nex
 *
 * --- Login Listener Removed ---
 *
 * [LOG]: User logged out: Impulse
 */

