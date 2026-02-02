
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const galleryDataPath = path.join(projectRoot, 'src/data/galleryData.json');

let data = JSON.parse(fs.readFileSync(galleryDataPath, 'utf-8'));

console.log(`Original Count: ${data.length}`);

// REVERT 2025-05-23.mp4
const item = data.find(i => i.filename === '2025-05-23.mp4');
if (item) {
    if (item.lightboxEmbed) {
        console.log(" Removing embed data from 2025-05-23.mp4...");
        delete item.lightboxEmbed;
        // Keep timelineLabel if it's useful? User said "regular embedded video" -> "regular video". 
        // Usually regular videos don't have timeline labels unless significant. 
        // User didn't explicitly say remove timelineLabel, but said "should not include embedding link". 
        // I'll keep timelineLabel if it was there before my patch, but wait, I added it in my patch.
        // My patch added: item1.timelineLabel = "告别演出";
        // So I should probably remove it to be safe, or user might want the label?
        // "it's just a regular video" implies standard behavior.
        // I will remove both I added.
        delete item.timelineLabel;
    } else {
        console.log(" 2025-05-23.mp4 is already clean.");
    }
} else {
    console.error(" 2025-05-23.mp4 NOT FOUND.");
}

fs.writeFileSync(galleryDataPath, JSON.stringify(data, null, 2));
console.log("Done.");
