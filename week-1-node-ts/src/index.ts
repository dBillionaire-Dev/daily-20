//PRACTISE SCRIPT
import { createServer } from 'http';
import type {IncomingMessage, ServerResponse} from "node:http";
import path from "path";
import { fileURLToPath } from 'url';

const server = createServer((req: IncomingMessage, res: ServerResponse): void => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, (): void => {
  console.log('Server running at http://localhost:3000/');
});

//PATH MODULE
//Get the current file path
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

console.log("Current file path: ", __filename);
console.log("Current directory path: ", __dirname);
console.log("File name:", path.basename(__filename));
console.log("Directory name:", path.basename(__dirname));
console.log("File extension name: ", path.extname(__filename));
console.log("File name without extension: ", path.basename(__filename, path.extname(__filename)));
console.log("Is absolute path: ", path.isAbsolute(__filename));
console.log("Relative path from current directory to file: ", path.relative(__dirname, __filename));

//FILE SYSTEM MODULE
import fs from "fs/promises";

//Write to a file
const filePath: string = path.join(__dirname, "example.txt");
const content: string = "Hello, this is a sample text file created using Node.js!";

const newFilePath = async (): Promise<void> => {
    try {
        await fs.writeFile(filePath, content,             {
            encoding: "utf-8",
            flag: "wx"
        });
        console.log("File created successfully!");
    }catch (error) {
        console.error("Error writing to file: ", error);
    }
}

//Read from a file
const readFileContent = async (): Promise<void> => {
    try {
        await fs.readFile(filePath, { encoding: "utf-8" });
        console.log("File read successfully! \nContent: ", content);
    } catch (e) {
     console.error("Error reading file:", e);
    }
}

await Promise.all
([
    newFilePath(),
        readFileContent(),
]);

