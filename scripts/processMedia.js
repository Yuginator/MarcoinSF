
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const sourceDir = path.join(projectRoot, 'src/assets/newphotos');
const outputDir = path.join(sourceDir, 'processed');

// Ensure output dir exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(sourceDir).filter(file => {
    return !file.startsWith('.') && file !== 'processed';
});

console.log(`Found ${files.length} files to process.`);

files.forEach((file, index) => {
    const inputPath = path.join(sourceDir, file);
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, path.extname(file)); // Keep user's filename

    console.log(`[${index + 1}/${files.length}] Processing ${file}...`);

    // 2. PROCESS
    // We TRUST the user's filename now. We just ensure FORMAT consistency.

    if (['.jpg', '.jpeg', '.png', '.heic', '.webp'].includes(ext)) {
        const targetName = `${baseName}.jpeg`; // Force .jpeg extension
        const targetPath = path.join(outputDir, targetName);

        try {
            // SIPS: Convert to JPEG, Resample max 2500px, Quality 80
            execSync(`sips -s format jpeg -s formatOptions 80 -Z 2500 "${inputPath}" --out "${targetPath}"`);
            console.log(`  -> Saved to ${targetName}`);
        } catch (e) {
            console.error(`  Error converting image: ${e.message}`);
        }

    } else if (['.mov', '.mp4'].includes(ext)) {
        const targetName = `${baseName}.mp4`; // Force .mp4 extension
        const targetPath = path.join(outputDir, targetName);

        try {
            // FFMPEG: H264, AAC, CRF 26, Preset Fast
            execSync(`ffmpeg -y -i "${inputPath}" -c:v libx264 -crf 26 -preset fast -vf "scale='min(1920,iw):-2'" -c:a aac -b:a 128k -movflags +faststart "${targetPath}"`, { stdio: 'ignore' });
            console.log(`  -> Saved to ${targetName}`);
        } catch (e) {
            console.error(`  Error converting video: ${e.message}`);
        }
    } else {
        console.log('  Unknown format, skipping.');
    }
});
