import fs from "node:fs/promises"
import path from "node:path";
import { fileURLToPath } from 'url';


const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);
const newDir: string = path.join(__dirname, "week-2-node-ts");

const createDir = async (): Promise<void> => {
    try {
        await fs.mkdir(newDir, { recursive: true });
        console.log("Directory created or already exists.");
    } catch (e) {
        console.error('Error creating directory:', e);
    }
}

await createDir();