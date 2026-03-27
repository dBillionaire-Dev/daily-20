/**
 * In Node.js, streams are collections of data, which might not be available in full at once and don't have to fit in memory.
 * Think of them as conveyor belts that move data from one place to another,
 * allowing to work with each piece as it arrives rather than waiting for the whole dataset.
 *
 * Streams are one of Node.js's most powerful features and are used extensively in:
 *
 *     File system operations (reading/writing files)
 *     HTTP requests and responses
 *     Data compression and decompression
 *     Database operations
 *     Real-time data processing
 */

/**
 * Why Use Streams?
 *
 * There are several advantages to using streams:
 *
 *     Memory Efficiency: Process large files without loading them entirely into memory
 *     Time Efficiency: Start processing data as soon as you have it, instead of waiting for all the data
 *     Composability: Build powerful data pipelines by connecting streams
 *     Better User Experience: Deliver data to users as it becomes available (e.g., video streaming)
 *
 * Imagine reading a 1GB file on a server with 512MB of RAM:
 *
 *     Without streams: You'd crash the process attempting to load the entire file into memory
 *     With streams: You process the file in small chunks (e.g., 64KB at a time)
 */

/**
 * CORE STREAM TYPES:
 *
 * * Readable: Lets you read data from a source (e.g (fs.createReadStream());
 * * Writeable: Lets you write data to a destination (e.g (fs.createWriteStream());
 * * Duplex: Combines both readable and writable capabilities (e.g (net.Socket());
 * * Transform: A type of duplex stream that can modify or transform the data as it is read or written (e.g (zlib.createGzip());
 *
 * Note: All streams in Node.js are instances of EventEmitter,
 * which means they emit events that can be listened to and handled.
 */

//Creating a readable stream
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from "path";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);
const inputFile: string = path.join(__dirname, 'random.txt');

const readableStream = createReadStream(
    inputFile,
    {
        encoding: 'utf-8' ,
        highWaterMark: 1024 * 32 // 32kb chunks
        //NOTE: { highWaterMark: 1024 } sets the buffer/chunk size to 1KB (default is 64KB)
});

let chunkCount: number = 0;
let totalBytes: number = 0;

readableStream.on("data", (chunk: string): void => {
    chunkCount++;
    totalBytes += chunk.length;
    console.log(`Received Chunk: #${chunkCount} ${chunk.length} bytes`);
})

readableStream.on("end", (): void => {
    console.log('\n--- Finished reading the file! ---');
    console.log(`Processed ${chunkCount} total chunks, \nRead ${(totalBytes/1048576).toFixed(2)} mb total`);
    console.log("No more data to read.");
})

readableStream.on("error", (error: Error): void => {
   console.error("Error reading large file:", error);
});

//Writing a stream to a file
