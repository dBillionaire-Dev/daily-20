import fs from "fs";
import { fileURLToPath } from "url";

/**
 * The event loop is what makes Node.js non-blocking and efficient.
 * It continuously checks for and processes events, allowing Node.js to handle multiple operations concurrently without blocking the main thread.
 * The event loop operates in several phases, including timers, I/O callbacks, idle, and more.
 * It handles asynchronous operations by delegating tasks to the system and processing their results through callbacks, allowing Node.js to manage thousands of concurrent connections with a single thread.
 *
 * HOW THE EVENT LOOP WORKS:
 * Execute the main script (synchronous code)
 * Process any microtasks (Promises, process.nextTick)
 * 1. Timers Phase: Executes callbacks scheduled by setTimeout() and setInterval().
 * 2. I/O Callbacks Phase: Executes callbacks for completed I/O operations.
 * 3. Idle, Prepare Phase: Internal phase for the event loop to prepare for the next phases.
 * 4. Poll Phase: Retrieves new I/O events; executes their callbacks immediately if they are ready.
 * 5. Check Phase: Executes callbacks scheduled by setImmediate().
 * 6. Close Callbacks Phase: Executes callbacks for closed events, such as socket.on('close', ...).
 *
 * The event loop allows Node.js to perform non-blocking I/O operations, making it ideal for building scalable network applications.
 * Understanding the event loop is crucial for writing efficient and performant Node.js applications, especially when dealing with asynchronous code.
 *
 * Performance Tip: Avoid blocking the event loop with CPU-intensive tasks. If you need to perform heavy computations, consider using worker threads or offloading the task to a separate service.
 * This will be covered in later sessions.
 *
 * Note: The event loop is a fundamental concept in Node.js, and mastering it will help you write better asynchronous code and improve the performance of your applications.
 *
 */

// console.log("First");
// setTimeout((): void => {
//     console.log("Second");
//     }, 0);
// Promise.resolve().then((): void => {
//     console.log("Third");
// });
// console.log("Fourth");

// Expected Output:
// First
// Fourth
// Third
// Second

/**
 * From the above snippet
 * Execution order:
 * 1.) Sync code first: (First, Fourth)
 * 2.) Microtasks (Promises) next: (Third)
 * 3.) Timers (setTimeout) last: (Second)
 */

const __filename: string = fileURLToPath(import.meta.url);

//ANOTHER, INVOLVING ALL PHASES
console.log("Synchronous Code: Start");

setTimeout((): void => {
    console.log("Timer 1");
}, 0);

setImmediate((): void => {
    console.log("Immediate 1, will process after Timer 1");
});

setTimeout((): void => {
    console.log("Timer 2, delayed by 3 seconds");
}, 3000);

setImmediate((): void => {
    console.log("Immediate 2, will process after Immediate 1");
});

fs.readFile(__filename, (): void => {
    console.log("File read callback, will process in I/O callbacks phase");
})

process.nextTick((): void => {
    console.log("Next Tick");
});

Promise.resolve().then((): void => {
    console.log("Promise");
});

console.log("Synchronous Code: End");

/**
 * Expected output from the above snippet
 * Synchronous Code: Start
 * Synchronous Code: End
 * Next Tick
 * Promise
 * Timer 1
 * Immediate 1, will process after Timer 1
 * Immediate 2, will process after Immediate 1
 * File read callback, will process in I/O callbacks phase
 * Timer 2, delayed by 3 seconds
 *
 * Explanation:
 * 1.) Synchronous code runs first (Start and End).
 * 2.) process.nextTick() runs before any other microtasks, so "Next Tick" is logged next.
 * 3.) Promise callbacks run after nextTick, so "Promise" is logged next.
 * 4.) setTimeout with 0ms delay runs in the timers phase, so "Timer 1" is logged next.
 * 5.) setImmediate runs in the check phase, which comes after timers, so "Immediate 1" is logged after "Timer 1".
 * 6.) The second setImmediate runs immediately after the first setImmediate, so "Immediate 2" is logged next.
 * 7.) The fs.readFile callback runs in the I/O callbacks phase, which comes after the check phase, so "File read callback" is logged next.
 * 8.) Finally, the second setTimeout with a delay of 5 seconds logs "Timer 2, delayed by 3 seconds".
 *
 * This example demonstrates how different types of asynchronous operations are handled in the event loop and their execution
 */

/** IMPORTANT NOTE:
 * The exact order of setTimeout and setImmediate can vary based on the environment and timing, but generally, setTimeout with a 0ms delay will execute before setImmediate. However, in some cases, especially when the event loop is busy, setImmediate may execute before the timers. Always test and understand the behavior in your specific environment.
 * Especially when inside I/O (fs.readFile())
 *
 * fs.readFile(__filename, (): void => {
 *     console.log("I/O Phase");
 *
 *     setTimeout((): void => {
 *          console.log("timeout");
 *     }, 0);
 *
 *     setImmediate((): void => {
    *     console.log("immediate");
 *     });
 * });
 *
 * OUTPUT:
 * * I/O Phase
 * * immediate
 * * timeout
 *
 * In this case, setImmediate will execute before setTimeout because the callback is being executed in the I/O callbacks phase,
 * And setImmediate is designed to execute immediately after the I/O callbacks phase,
 * While setTimeout will be scheduled for the timers phase, which comes after the check phase where setImmediate runs.
 *
 * This behavior highlights the importance of understanding the event loop phases and how different asynchronous operations are scheduled and executed in Node.js.
 */