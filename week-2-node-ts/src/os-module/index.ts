/**
 * OS MODULE IN NODE.JS
 * The OS module provides a number of operating system-related utility methods.
 * It can be accessed using:
 * * import os from 'os';
 *
 * Some of the commonly used methods in the OS module include:
 * * os.platform(): Returns the platform of the operating system (e.g., 'win32', 'darwin', 'linux').
 * * os.arch(): Returns the architecture of the operating system (e.g., 'x64', 'arm').
 * * os.cpus(): Returns an array of objects containing information about each CPU/core installed.
 * * os.freemem(): Returns the amount of free memory in bytes.
 * * os.totalmem(): Returns the total amount of memory in bytes.
 * * os.uptime(): Returns the system uptime in seconds.
 * * os.homedir(): Returns the home directory of the current user.
 * * os.tmpdir(): Returns the default directory for temporary files.
 */

import os from "os";

const os_name: string = os.platform();
console.log("os_name: ", os_name); // OUTPUT: os_name: linux
console.log(os.arch());
console.log(os.uptime());