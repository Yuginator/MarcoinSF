
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const mediaDir = path.join(projectRoot, 'src/assets/media');
const galleryDataPath = path.join(projectRoot, 'src/data/galleryData.json');

console.log("Starting Media Standardization...");

let galleryData = [];
try {
    galleryData = JSON.parse(fs.readFileSync(galleryDataPath, 'utf8'));
} catch (e) {
    console.warn("Could not load galleryData.json, starting empty.");
}

// Helper to update JSON reference
function updateJsonReference(oldName, newName) {
    const item = galleryData.find(i => i.filename === oldName);
    if (item) {
        console.log(`  Updating JSON: ${oldName} -> ${newName}`);
        item.filename = newName;
        item.src = `/src/assets/media/${newName}`;
        // Preserve other metadata
    } else {
        console.warn(`  Warning: ${oldName} not found in JSON data.`);
    }
}

// 1. RENAME SPECIFIC VIDEO
const videoOld = '2025-12-04.mp4';
const videoNew = '2024-11-14.mp4';
if (fs.existsSync(path.join(mediaDir, videoOld))) {
    console.log(`Renaming ${videoOld} -> ${videoNew}`);
    fs.renameSync(path.join(mediaDir, videoOld), path.join(mediaDir, videoNew));
    updateJsonReference(videoOld, videoNew);
}

// 2. CONVERT IMAGES TO JPEG
const files = fs.readdirSync(mediaDir).filter(f => !f.startsWith('.'));

files.forEach(file => {
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const lowerExt = ext.toLowerCase();

    // Target formats to convert: .png, .jpg, .JPG, .jpeg (if mixed case)
    // We want everything to be .jpeg

    if (['.png', '.jpg', '.jpeg', '.heic', '.webp'].includes(lowerExt)) {

        // Skip if already .jpeg (exact match)
        if (ext === '.jpeg') return;

        console.log(`Converting ${file} -> ${baseName}.jpeg`);

        const inputPath = path.join(mediaDir, file);
        const outputPath = path.join(mediaDir, `${baseName}.jpeg`);

        try {
            // Convert using sips
            execSync(`sips -s format jpeg -s formatOptions 80 "${inputPath}" --out "${outputPath}"`, { stdio: 'ignore' });

            // Remove original if different filename
            if (inputPath !== outputPath) {
                fs.unlinkSync(inputPath);
            }

            updateJsonReference(file, `${baseName}.jpeg`);

        } catch (e) {
            console.error(`  Error converting ${file}: ${e.message}`);
        }
    }
});

// 3. CLEAN UP (Remove any remaining .jpg / .png if sips failed to overwrite or something)
// (Handled above by unlink)

// 4. SAVE JSON
fs.writeFileSync(galleryDataPath, JSON.stringify(galleryData, null, 2));
console.log("Updated galleryData.json");
console.log("Done.");
