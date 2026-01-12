
import galleryDataJson from './galleryData.json';

// Import all media files to get their resolved URLs (hashed by Vite)
const mediaFiles = import.meta.glob('../assets/media/**/*.{jpg,jpeg,png,mp4,JPG,JPEG}', { eager: true, as: 'url' });

// Create a map for fast lookup: "filename.ext" -> "/assets/media/filename.hash.ext"
const urlMap = new Map();
for (const [path, url] of Object.entries(mediaFiles)) {
    const filename = path.split('/').pop();
    urlMap.set(filename, url);
}

// Hydrate the JSON data with real runtime URLs
export const galleryData = galleryDataJson.map(item => {
    const runtimeUrl = urlMap.get(item.filename);

    // Safety check - if a file in JSON is missing in build (deleted?), fallback or filter?
    // We'll keep it but warn, or maybe filter it out at component level.
    // For now, let's just attach it.

    return {
        ...item,
        src: runtimeUrl || item.src // Use hashed URL if found, else original string (might 404 but debuggable)
    };
}).filter(item => item.src); // Filter out items where media is missing from disk but present in JSON

export default galleryData;
