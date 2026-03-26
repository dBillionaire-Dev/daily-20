import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);
const fileRead: string = path.join(__dirname, "input.txt");

const readableStream = fs.createReadStream(
    fileRead,
    {
        encoding: "utf-8",
        highWaterMark: 1024 * 32 // 32 kb chunks
    }
)

let chunkCount: number = 0;
let totalBytes: number = 0;

readableStream.on("data", (chunk: string): void => {
    chunkCount ++;
    totalBytes += chunk.length;
    console.log(`Received Chunk: #${chunkCount} ${totalBytes} bytes`)
});

readableStream.on("end", (): void => {
    console.log("\n--- End of File!!! ---");
    console.log(`Total data received: ${chunkCount} total chunk, \nRead ${(totalBytes/1048576).toFixed(2)} mb total`);
    console.log("No more data to read");
});

readableStream.on("error", (error: Error): void => {
    console.error("Error reading large file", error);
});