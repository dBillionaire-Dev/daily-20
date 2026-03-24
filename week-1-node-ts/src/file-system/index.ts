import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

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


/**
 * Since the ES module is in use, the file path has to be resolved using the fileURLToPath and path modules to get the current directory.
 * This is necessary because __dirname and __filename are not available in ES modules.
 * The fileURLToPath function converts the module's URL to a file path, and path.dirname is used to get the directory name from that file path.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read file asynchronously using promises
const readFileExample = async (): Promise<void> => {
    try {
        const data: string = await fs.readFile(path.join(__dirname, 'myfile.txt'), 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

// For binary data (like images), omit the encoding
const readBinaryExample = async (): Promise<void> => {
    try {
        const data = await fs.readFile(path.join(__dirname, "image.png"));
        console.log('Image size:', data.length, 'bytes');
    } catch (err) {
        console.error('Error reading image:', err);
    }
}

//WRITE FILES

const writeFileExample = async (): Promise<void> => {
    try {
        await fs.writeFile(path.join(__dirname, 'newFile.txt'),
            'Hello, this is a new file created using fs.writeFile!',
            { encoding: 'utf-8', flag: 'wx' }
        /**
         * By default, writeFile overwrites an existing file content,
         * but by using the flag 'wx', it will throw an error if the file already exists,
         * preventing accidental overwrites.
         */

        );
        console.log("New File Created Successfully at:", path.join(__dirname, 'newFile.txt'));
    } catch (e) {
        console.error('Error writing file:', e);
    }
}

//Append new content to existing file
const appendFileExample = async (): Promise<void> => {
    try {
        const createdAt: string = `Created at ${new Date().toISOString()}`;
        await fs.appendFile(path.join(__dirname, 'newFile.txt'), `\n${createdAt}`, 'utf8');
        console.log('Content appended successfully!');
    } catch (err) {
        console.error('Error appending to file:', err);
    }
}

/**
 * Other file system methods includes:
 * - fs.readdir() to read the contents of a directory
 * - fs.stat() to get information about a file or directory
 * - fs.rename() to rename a file or directory
 * - fs.unlink() to delete a file
 * - fs.mkdir() to create a new directory
 * - fs.rmdir() to remove a directory
 * - fs.copyFile() to copy a file from one location to another
 * - fs.exists() to check if a file or directory exists (deprecated, use fs.access instead)
 * - fs.access() to check the accessibility of a file or directory (e.g., read/write permissions)
 */

await Promise.all([
    readFileExample(),
    readBinaryExample(),
    writeFileExample(),
    appendFileExample(),
]);