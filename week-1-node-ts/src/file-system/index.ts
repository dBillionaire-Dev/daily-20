import fs from "fs/promises";
import path from "path";

/**
 * The Node.js File System module (fs) provides a comprehensive set of methods for working with the file system on your computer.
 * It allows you to perform file I/O operations in both synchronous and asynchronous ways.
 * Best practise, always handle file operations asynchronously to avoid blocking the event loop, which can lead to performance issues in your application.
 * Performance Tip: For large files, consider using streams (fs.createReadStream and fs.createWriteStream) to avoid high memory usage.
 * This will be covered in later sessions
 */

/** Reading Files
* Node.js provides several methods to read files, including both callback-based and promise-based approaches.
*   The most common method is fs.readFile().
*    Note: Always handle errors when working with file operations to prevent your application from crashing.
*/

// Read file asynchronously with callback
const readFileExample = async (): Promise<void> => {
    try {
        const data: string | null = await fs.readFile('myfile.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

// For binary data (like images), omit the encoding
const readBinaryExample = async (): Promise<void> => {
    try {
        const data = await fs.readFile('image.png');
        console.log('Image size:', data.length, 'bytes');
    } catch (err) {
        console.error('Error reading image:', err);
    }
}

readFileExample();
readBinaryExample()