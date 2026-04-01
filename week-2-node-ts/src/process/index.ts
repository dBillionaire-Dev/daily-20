/**
 * PROCESS MODULE IN NODE.JS
 * The Process module provides information about, and control over, the current Node.js process. It can be accessed using:
 * * import process from 'process';
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
