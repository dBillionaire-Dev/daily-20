/**
 * PROCESS MODULE IN NODE.JS
 * The Process module provides information about, and control over, the current Node.js process.
 * It can be accessed using:
 *
 *      import process from 'process';
 *
 * Some of the commonly used properties and methods in the Process module include:
 * * process.argv: An array containing the command-line arguments passed when the Node.js process was launched.
 * * process.env: An object containing the user environment.
 * * process.exit([code]): Ends the process with the specified code (default is 0).
 * * process.cwd(): Returns the current working directory of the process.
 * * process.pid: The PID (process ID) of the current process.
 * * process.version: The Node.js version string.
 * * process.memoryUsage(): Returns an object describing the memory usage of the Node.js process.
 * * process.on(event, listener): Adds a listener for the specified event (e.g., 'exit', 'uncaughtException').
 * * process.nextTick(callback): Schedules a callback function to be invoked in the next iteration of the event loop.
 * * process.stdout: A writable stream to stdout (standard output).
 * * process.stderr: A writable stream to stderr (standard error).
 * * process.stdin: A readable stream from stdin (standard input).
 *
 * HOW TO USE THE PROCESS MODULE?
 * You can use the Process module to access information about the current process, handle events, and control the process flow.
 * For example:
 * * console.log(process.argv); // Output: [ 'node', 'script.js', 'arg1', 'arg2' ]
 * * console.log(process.env); // Output: { PATH: '/usr/local/bin', HOME: '/home/user', ... }
 * * process.exit(0); // Ends the process with code 0 (success)
 * * console.log(process.cwd()); // Output: /home/user/project
 * * console.log(process.pid); // Output: 12345
 * * console.log(process.version); // Output: v14.17.0
 * * console.log(process.memoryUsage()); // Output: { rss: 12345678, heapTotal: 12345678, heapUsed: 12345678, external: 12345678 }
 * * process.on('exit', (code) => { console.log(`Process exited with code ${code}`); });
 * * process.nextTick(() => { console.log('This will be executed in the next iteration of the event loop'); });
 *
 * The Process module is essential for managing and controlling the Node.js process, and it provides a wide range of functionalities for working with the process environment and events.
 */

import process from "process";

console.log("Process arguments: ", process.argv);
console.log("Environment variables: ", process.env);
console.log("Current working directory: ", process.cwd());
console.log("Process ID: ", process.pid);
console.log("Node.js version: ", process.version);
console.log("Memory usage: ", process.memoryUsage());

process.on('exit', (code) => {
    console.log(`Process exited with code ${code}`);
});

process.nextTick(() => {
    console.log('This will be executed in the next iteration of the event loop');
});