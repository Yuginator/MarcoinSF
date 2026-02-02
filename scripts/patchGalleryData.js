
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const galleryDataPath = path.join(projectRoot, 'src/data/galleryData.json');

let data = JSON.parse(fs.readFileSync(galleryDataPath, 'utf-8'));

console.log(`Original Count: ${data.length}`);

// 1. REPAIR 2025-05-23.mp4 (Lost Data)
const item1 = data.find(i => i.filename === '2025-05-23.mp4');
if (item1) {
    if (!item1.lightboxEmbed) {
        console.log(" repairing 2025-05-23.mp4...");
        item1.lightboxEmbed = "https://www.youtube.com/watch?v=VHzb1kN1rLs";
        item1.timelineLabel = "告别演出";
    } else {
        console.log(" 2025-05-23.mp4 already has data.");
    }
} else {
    console.error(" 2025-05-23.mp4 NOT FOUND in data.");
}

// 2. REPAIR 2025-05-10-06 (Migrate PNG -> JPEG)
const pngItem = data.find(i => i.filename === '2025-05-10-06.png');
const jpegItem = data.find(i => i.filename === '2025-05-10-06.jpeg');

if (pngItem && jpegItem) {
    console.log(" Migrating 2025-05-10-06 PNG -> JPEG...");
    jpegItem.lightboxEmbed = pngItem.lightboxEmbed;
    jpegItem.timelineLabel = pngItem.timelineLabel;

    // Remove PNG item
    data = data.filter(i => i.filename !== '2025-05-10-06.png');
    console.log(" Removed 2025-05-10-06.png entry.");
} else if (!pngItem && jpegItem) {
    console.log(" PNG source missing, checking JPEG...");
    if (!jpegItem.lightboxEmbed) {
        // Harcoded fallback just in case
        console.log("  Restoring JPEG data from backup string...");
        jpegItem.lightboxEmbed = "https://player.vimeo.com/video/1083175160?h=86c067f4f9&badge=0&autopause=0&player_id=0&app_id=58479";
        jpegItem.timelineLabel = "电影节";
    }
}

// 3. VERIFY 2024-08-23-2.png
const item2 = data.find(i => i.filename === '2024-08-23-2.png');
if (item2) {
    if (!item2.lightboxEmbed) {
        console.log(" Repairing 2024-08-23-2.png...");
        item2.lightboxEmbed = "https://vimeo.com/1144210034?share=copy&fl=sv&fe=ci";
        item2.timelineLabel = "炸酱面大赛";
    } else {
        console.log(" 2024-08-23-2.png already has data.");
    }
}

console.log(`Final Count: ${data.length}`);
fs.writeFileSync(galleryDataPath, JSON.stringify(data, null, 2));
console.log("Done.");
