import path from "path";
import { fileURLToPath } from "url";

/**
 * In "type": module, Node.js treats code as ESM.
 * This means that the __filename is not automatically derived as it is n CommonJs module
 * To that effect, filename has to be built using the url module.
 * Which is imported above and built as it is below;
 * Failure to do this in modern practise will throw an error.
 */

const __filename = fileURLToPath(import.meta.url);
const joinedPath = path.join("/usr", "bin", "bash", "git", ".gitignore");

console.log("File directory:", path.dirname(__filename));
console.log("File extension:", path.extname(__filename));
console.log("File name:", path.basename(__filename));
console.log("File name without extension:", path.basename(__filename, path.extname(__filename)));
console.log("Absolute path:", path.resolve(__filename));
console.log("Is Absolute:", path.isAbsolute(__filename));
console.log("Joined path:", joinedPath);
