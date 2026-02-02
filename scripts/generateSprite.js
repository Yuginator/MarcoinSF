import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.resolve(__dirname, '../src/assets/doodle/walkingCharacter');
const OUTPUT_FILE = path.resolve(__dirname, '../src/assets/doodle/walkingCharacter/walking-sprite.svg');

async function generateSprite() {
    console.log(`Scanning ${INPUT_DIR}...`);

    // 1. Get files
    const files = fs.readdirSync(INPUT_DIR)
        .filter(file => file.endsWith('.svg'))
        .sort((a, b) => {
            const numA = parseInt(a.match(/walk(\d+)/)?.[1] || 0, 10);
            const numB = parseInt(b.match(/walk(\d+)/)?.[1] || 0, 10);
            return numA - numB;
        });

    if (files.length === 0) {
        console.error('No SVG files found.');
        return;
    }

    console.log(`Found ${files.length} frames.`);

    // 2. Process first file to get dimensions
    const firstContent = fs.readFileSync(path.join(INPUT_DIR, files[0]), 'utf-8');
    const viewBoxMatch = firstContent.match(/viewBox="([^"]+)"/);

    if (!viewBoxMatch) {
        console.error('Could not find viewBox in first SVG.');
        return;
    }

    const viewBoxCoords = viewBoxMatch[1].split(' ').map(Number);
    const [minX, minY, width, height] = viewBoxCoords;

    console.log(`Frame Dimensions: ${width}x${height}`);

    const totalHeight = height * files.length;

    // 3. Build Sprite Content
    let spriteContent = `<svg width="${width}" height="${totalHeight}" viewBox="0 0 ${width} ${totalHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">\n`;

    files.forEach((file, index) => {
        const content = fs.readFileSync(path.join(INPUT_DIR, file), 'utf-8');

        // Extract inner content (removes <svg> wrapper)
        // Regex looks for content between the first > of <svg...> and the last </svg>
        const svgBodyMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);

        if (svgBodyMatch) {
            let body = svgBodyMatch[1];
            // Remove <defs> if they are duplicated or handle them? 
            // Ideally we dedupe defs, but for now simple stacking usually works if IDs don't collide badly.
            // However, clip-paths might collide. 
            // Let's namespace the IDs just in case.
            const uniqueIdSuffix = `_${index}`;

            // Replace IDs in definitions
            body = body.replace(/id="([^"]+)"/g, `id="$1${uniqueIdSuffix}"`);
            // Replace references to IDs
            body = body.replace(/url\(#([^)]+)\)/g, `url(#$1${uniqueIdSuffix})`);

            spriteContent += `  <g transform="translate(0, ${index * height})">\n`;
            spriteContent += body;
            spriteContent += `  </g>\n`;
        }
    });

    spriteContent += `</svg>`;

    // 4. Write
    fs.writeFileSync(OUTPUT_FILE, spriteContent);
    console.log(`Sprite generated at: ${OUTPUT_FILE}`);
}

generateSprite();
