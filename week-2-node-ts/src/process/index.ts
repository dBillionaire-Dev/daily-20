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

process.on('exit', (code: number): void => {
    console.log(`Process exited with code ${code}`);
});

process.nextTick((): void => {
    console.log('This will be executed in the next iteration of the event loop');
});

/**
 * OUTPUT:
 * Process arguments:  [
 *   '/usr/bin/node',
 *   '/home/nexa/Backend/Mern/week-2-node-ts/src/process/index.ts'
 * ]
 * Environment variables:  {
 *   SHELL: '/usr/bin/bash',
 *   HYPRLAND_CMD: 'Hyprland',
 *   XDG_SESSION_PATH: '/org/freedesktop/DisplayManager/Session1',
 *   XDG_BACKEND: 'wayland',
 *   CLUTTER_BACKEND: 'wayland',
 *   TERMINAL_EMULATOR: 'JetBrains-JediTerm',
 *   QT_WAYLAND_DISABLE_WINDOWDECORATION: '1',
 *   PROCESS_LAUNCHED_BY_Q: '1',
 *   TERM_SESSION_ID: 'c34e4770-2e6f-4a47-993e-166cf16f2846',
 *   DESKTOP_SESSION: 'hyprland',
 *   ELECTRON_OZONE_PLATFORM_HINT: 'wayland',
 *   HL_INITIAL_WORKSPACE_TOKEN: '47d26a0e-d975-4bff-81a4-1771c1fca46f',
 *   XCURSOR_SIZE: '24',
 *   EDITOR: 'nvim',
 *   XDG_SEAT: 'seat0',
 *   PWD: '/home/nexa/Backend/Mern/week-2-node-ts/src/process',
 *   XDG_SESSION_DESKTOP: 'Hyprland',
 *   LOGNAME: 'nexa',
 *   QT_QPA_PLATFORMTHEME: 'qt5ct',
 *   XDG_SESSION_TYPE: 'wayland',
 *   PROCESS_LAUNCHED_BY_CW: '1',
 *   MOTD_SHOWN: 'pam',
 *   HOME: '/home/nexa',
 *   LANG: 'en_US.UTF-8',
 *   _JAVA_AWT_WM_NONREPARENTING: '1',
 *   XDG_CURRENT_DESKTOP: 'Hyprland',
 *   WAYLAND_DISPLAY: 'wayland-1',
 *   XDG_SEAT_PATH: '/org/freedesktop/DisplayManager/Seat0',
 *   FIG_TERM: '1',
 *   QT_QPA_PLATFORM: 'wayland;xcb',
 *   XDG_SESSION_CLASS: 'user',
 *   TERM: 'xterm-256color',
 *   USER: 'nexa',
 *   SDL_VIDEODRIVER: 'wayland',
 *   OZONE_PLATFORM: 'wayland',
 *   HYPRLAND_INSTANCE_SIGNATURE: '386376400119dd46a767c9f8c8791fd22c7b6e61_1775104282_312851298',
 *   DISPLAY: ':1',
 *   SHLVL: '2',
 *   MOZ_ENABLE_WAYLAND: '1',
 *   XDG_VTNR: '1',
 *   XDG_SESSION_ID: '2',
 *   INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED: '1',
 *   XDG_RUNTIME_DIR: '/run/user/1000',
 *   DEBUGINFOD_URLS: 'https://debuginfod.archlinux.org ',
 *   QT_AUTO_SCREEN_SCALE_FACTOR: '1',
 *   XDG_DATA_DIRS: '/home/nexa/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/local/share:/usr/share',
 *   GDK_BACKEND: 'wayland,x11,*',
 *   PATH: '/usr/lib/ccache/bin/:/usr/lib/ccache/bin/:/usr/local/sbin:/usr/local/bin:/usr/bin:/var/lib/flatpak/exports/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/home/nexa/.cargo/bin/:/home/nexa/.local/bin/:/home/nexa/Backend/Mern/node_modules/.bin:/home/nexa/.cargo/bin/:/home/nexa/.local/bin/',
 *   GDK_SCALE: '1',
 *   DBUS_SESSION_BUS_ADDRESS: 'unix:path=/run/user/1000/bus',
 *   MAIL: '/var/spool/mail/nexa',
 *   GIO_LAUNCHED_DESKTOP_FILE_PID: '1906',
 *   HYPRCURSOR_SIZE: '24',
 *   _: '/usr/bin/node',
 *   OLDPWD: '/home/nexa/Backend/Mern'
 * }
 * Current working directory:  /home/nexa/Backend/Mern/week-2-node-ts/src/process
 * Process ID:  2838
 * Node.js version:  v25.2.1
 * Memory usage:  {
 *   rss: 71888896,
 *   heapTotal: 9912320,
 *   heapUsed: 9124408,
 *   external: 10478992,
 *   arrayBuffers: 2623641
 * }
 * This will be executed in the next iteration of the event loop
 * Process exited with code 0
 */