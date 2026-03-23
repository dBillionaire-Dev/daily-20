import fs from "fs/promises";
import path from "path";

/**
 * The Node.js File System module (fs) provides a comprehensive set of methods for working with the file system on your computer.
 * It allows you to perform file I/O operations in both synchronous and asynchronous ways.
 * Performance Tip: For large files, consider using streams (fs.createReadStream and fs.createWriteStream) to avoid high memory usage.
 * This will be covered in later sessions
 */

// Reading Files

// Node.js provides several methods to read files, including both callback-based and promise-based approaches.

//    The most common method is fs.readFile().

//    Note: Always handle errors when working with file operations to prevent your application from crashing.
 //   Reading Files with Callbacks

 //   Here's how to read a file using the traditional callback pattern:

// Read file asynchronously with callback
fs.readFile('myfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

// For binary data (like images), omit the encoding
fs.readFile('image.png', (err, data) => {
    if (err) throw err;
    // data is a Buffer containing the file content
    console.log('Image size:', data.length, 'bytes');
});