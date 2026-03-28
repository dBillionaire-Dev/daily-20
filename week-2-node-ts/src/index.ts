import fs from "fs/promises"
import { fileURLToPath } from 'url';
import path from "path";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);
const newFile: string = path.join(__dirname, "week.md");

const createFile = async (): Promise<void> => {
    try {
        await fs.writeFile(newFile, "This is the content of the file.");
        console.log("File created successfully.");
    } catch (e) {
        console.error('Error creating file:', e);
    }
}

await createFile();