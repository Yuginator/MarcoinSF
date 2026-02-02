
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const galleryDataPath = path.join(projectRoot, 'src/data/galleryData.json');
const galleryDataJson = JSON.parse(fs.readFileSync(galleryDataPath, 'utf-8'));

// Targets
const targets = ['2024-08-23-2.png', '2025-05-10-06.png', '2025-05-23.mp4'];

console.log("Checking Targets in RAW JSON:");
targets.forEach(t => {
    const item = galleryDataJson.find(i => i.filename === t);
    if (item) {
        console.log(`[${t}] Found. LightboxEmbed:`, item.lightboxEmbed);
    } else {
        console.log(`[${t}] NOT FOUND.`);
    }
});

// Simulate useGalleryData
const hydrated = galleryDataJson.map(item => {
    // We don't have Vite's glob here, but the hydration logic was just:
    // ...item, src: runtimeUrl || item.src
    // So properties should persist.
    return {
        ...item,
        simulated: true
    };
});

console.log("\nChecking Targets in HYDRATED Data:");
targets.forEach(t => {
    const item = hydrated.find(i => i.filename === t);
    if (item) {
        console.log(`[${t}] Found. LightboxEmbed:`, item.lightboxEmbed);
    } else {
        console.log(`[${t}] NOT FOUND.`);
    }
});
