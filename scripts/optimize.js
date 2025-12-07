import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// ESM dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.resolve(__dirname, '../assets/media');
const OUTPUT_DIR = path.resolve(__dirname, '../assets/media/optimized');

const QUALITY = 80;
const MAX_SIZE = 1024;

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function processFiles() {
    const files = fs.readdirSync(INPUT_DIR);
    let processedCount = 0;

    console.log(`Scanning ${files.length} files in ${INPUT_DIR}...`);

    for (const file of files) {
        if (file.startsWith('.') || file.startsWith('ignore_')) continue;

        const inputPath = path.join(INPUT_DIR, file);
        const ext = path.extname(file).toLowerCase();

        // Skip if directory
        if (fs.statSync(inputPath).isDirectory()) continue;

        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            const outputFilename = `${path.basename(file, ext)}.webp`;
            const outputPath = path.join(OUTPUT_DIR, outputFilename);

            if (fs.existsSync(outputPath)) {
                // console.log(`Skipping ${file} (already optimized)`);
                continue;
            }

            try {
                await sharp(inputPath)
                    .resize(MAX_SIZE, MAX_SIZE, {
                        fit: 'inside',
                        withoutEnlargement: true
                    })
                    .webp({ quality: QUALITY })
                    .toFile(outputPath);

                console.log(`Optimized: ${file} -> ${outputFilename}`);
                processedCount++;
            } catch (err) {
                console.error(`Error optimizing ${file}:`, err);
            }
        }
    }

    console.log(`\nDone! Optimized ${processedCount} new images.`);
}

processFiles().catch(console.error);
