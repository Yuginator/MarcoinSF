
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sizeOf from 'image-size';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go one level up from scripts/ to root
const projectRoot = path.resolve(__dirname, '..');
const mediaDir = path.resolve(projectRoot, 'src/assets/media');
const outputFile = path.resolve(projectRoot, 'src/data/galleryData.json');

// Helper to determine frame type based on ratio
function getFrameType(ratio) {
    if (ratio > 1.2) return 'landscape-wide';
    if (ratio < 0.8) return 'portrait-tall';
    if (ratio >= 0.8 && ratio <= 1.2) return 'square-ish';
    return 'standard';
}

// Generate a stable hash ID based on filename
function generateStableId(filename) {
    return crypto.createHash('md5').update(filename).digest('hex').substr(0, 12);
}

// Helper to get video dimensions (image-size doesn't support video well, needs fallback or ffprobe)
// For now, we will try to stick to defaults or simple heuristics if image-size fails on videos.
// NOTE: image-size does NOT support video files (mp4, mov).
// We might need a fallback or just default to standard ratio for videos if we don't want to use ffprobe.
// For now, let's keep it simple: reliable images. Videos get default or maybe we can keep `mdls` as a fallback if on mac?
// Actually, to remain cross-platform without heavy deps like ffmpeg, we might just have to accept default dims for video
// or read metadata from a sidecar file if needed.
// Levaing a TODO for Video.
// Wait, the previous code handled video via `mdls`.
// Let's implement a "try/catch" loop using standard logic.

async function generate() {
    console.log(`Scanning ${mediaDir}...`);
    try {
        if (!fs.existsSync(mediaDir)) {
            console.error(`Media directory not found: ${mediaDir}`);
            process.exit(1);
        }

        // 1. Get List of Files
        const files = fs.readdirSync(mediaDir)
            .filter(f => !f.startsWith('.') && !f.startsWith('Ignore_'));

        // 2. Load Existing Data (for merge/persisting manual edits)
        let existingData = [];
        if (fs.existsSync(outputFile)) {
            try {
                existingData = JSON.parse(fs.readFileSync(outputFile, 'utf-8'));
                console.log(`Loaded ${existingData.length} existing entries for merging.`);
            } catch (e) {
                console.warn("Could not parse existing data, starting fresh.");
            }
        }

        // Map by filename for easy lookup
        const existingMap = new Map(existingData.map(item => {
            const fname = item.filename || item.src.split('/').pop();
            return [fname, item];
        }));

        const newGalleryData = [];

        console.log(`Processing ${files.length} files...`);

        for (const file of files) {
            const filePath = path.join(mediaDir, file);

            // Basic Metadata
            const extension = file.split('.').pop().toLowerCase();
            const isVideo = ['mp4', 'webm', 'mov'].includes(extension);

            // Try to extract date from filename (YYYY-MM-DD)
            const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
            const date = dateMatch ? dateMatch[1] : null;

            let width = 0;
            let height = 0;

            if (!isVideo) {
                try {
                    const buffer = fs.readFileSync(filePath);
                    const dimensions = sizeOf(buffer);
                    width = dimensions.width;
                    height = dimensions.height;
                } catch (err) {
                    console.warn(`Failed to get image dimensions for ${file}: ${err.message}`);
                }
            } else {
                // For Video, we use defaults or existing data if available.
                // Without ffprobe/mdls this is hard to do purely in Node without syscalls.
                // We'll trust existing data if it exists.
                const existing = existingMap.get(file);
                if (existing && existing.width && existing.height) {
                    width = existing.width;
                    height = existing.height;
                } else {
                    // Default fallback
                    width = 1920;
                    height = 1080;
                }
            }

            // Fallback
            if (!width || !height) {
                width = 800;
                height = 1000;
            }

            const ratio = width / height;
            const frameType = getFrameType(ratio);

            // Merge
            const existing = existingMap.get(file);

            const item = {
                // Use stable ID so keys don't thrash
                id: existing?.id || generateStableId(file),
                filename: file,
                src: `/src/assets/media/${file}`, // Path relative to project root, for reference
                type: isVideo ? 'video' : 'image',
                date: date || existing?.date,
                caption: existing?.caption || file.split('.')[0],
                description: existing?.description || "",
                width,
                height,
                aspectRatio: parseFloat(ratio.toFixed(4)),
                frameType,
                frameType,
                frameType,
                orientation: width > height ? 'landscape' : width < height ? 'portrait' : 'square',
                lightboxEmbed: existing?.lightboxEmbed, // Preserve manual embed links
                timelineLabel: existing?.timelineLabel // Preserve manual timeline labels
            };

            newGalleryData.push(item);
        }

        // Sort by date/filename ASCENDING (Oldest first)
        newGalleryData.sort((a, b) => a.filename.localeCompare(b.filename));

        fs.writeFileSync(outputFile, JSON.stringify(newGalleryData, null, 2));
        console.log(`Generated ${outputFile} with ${newGalleryData.length} items.`);

    } catch (err) {
        console.error("Fatal error:", err);
        process.exit(1);
    }
}

generate();
