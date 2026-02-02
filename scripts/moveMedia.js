
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const sourceDir = path.join(projectRoot, 'src/assets/newphotos');
const targetDir = path.join(projectRoot, 'src/assets/media');
const processedDir = path.join(sourceDir, 'processed');

// Prioritize files in 'processed' if it exists, otherwise use 'newphotos'
let sourcePath = sourceDir;
if (fs.existsSync(processedDir) && fs.readdirSync(processedDir).length > 0) {
    console.log("Found 'processed' directory, using optimized files.");
    sourcePath = processedDir;
} else {
    console.log("No 'processed' directory found, using files from 'newphotos'.");
}

const files = fs.readdirSync(sourcePath).filter(f => !f.startsWith('.') && f !== 'processed');

console.log(`Moving ${files.length} files from ${sourcePath} to ${targetDir}...`);

files.forEach(file => {
    const srcFile = path.join(sourcePath, file);

    // Check for collision
    let targetName = file;
    let targetFile = path.join(targetDir, targetName);

    // Auto-rename loop
    if (fs.existsSync(targetFile)) {
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        let counter = 1;

        while (fs.existsSync(path.join(targetDir, `${name}-${counter}${ext}`))) {
            counter++;
        }
        targetName = `${name}-${counter}${ext}`;
        targetFile = path.join(targetDir, targetName);
        console.log(`  Conflict: ${file} -> Renaming to ${targetName}`);
    }

    // Move
    fs.renameSync(srcFile, targetFile);
    console.log(`  Moved: ${file} -> ${targetName}`);
});

console.log("Move complete.");
