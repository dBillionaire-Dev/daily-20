import fs from "fs/promises"
import { fileURLToPath } from 'url';
import path from "path";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);
const newFile: string = path.join(__dirname, "week.md");

const createFile = async (): Promise<void> => {
    try {
        await fs.writeFile(newFile, "This is the content of the file.",  {
            encoding: "utf-8",
                flag: "wx",
        });
        console.log("File created successfully.");
    } catch (e) {
        console.error('Error creating file:', e);
    }
}

const makeNewDirectory = async (): Promise<void> => {
    try {
        await fs.mkdir(path.join(__dirname, "week-2-node-ts"), { recursive: true });
        console.log("Directory created or already exists.");
    } catch (e) {
        console.error('Error creating directory:', e);
    }
}
await Promise.all([
    createFile(),
    makeNewDirectory(),
])