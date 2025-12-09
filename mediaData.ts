import beggingBuddha from './assets/BGM/BeggingBuddha.mp3';
import fujiMt from './assets/BGM/FujiMt.mp3';
import handbeatenFishball from './assets/BGM/Handbeaten-fishball.mp3';
import louMei from './assets/BGM/LouMei.mp3';
import vimeoPreview from './assets/media/Ignore_2025-05-10-06.png';
import vimeoPreview20240823 from './assets/media/Ignore_2024-08-23-5.png';

export type MediaType = 'image' | 'video' | 'embed';

export interface MediaItem {
  id: string;
  type: MediaType;
  src: string;
  previewSrc?: string;
  embedUrl?: string;
  timelineLabel?: string;
  title: string;
  description: string;
  date: string;
  filename: string; // Added filename field for dimension lookup
}

export interface MusicTrack {
  title: string;
  src: string;
}

export const MUSIC_TRACKS: MusicTrack[] = [
  { title: 'Handbeaten Fishball', src: handbeatenFishball },
  { title: 'Begging Buddha', src: beggingBuddha },
  { title: 'Fuji Mt', src: fujiMt },
  { title: 'Lou Mei', src: louMei },
];

const mediaModules = import.meta.glob<{ default: string }>('./assets/media/*', {
  eager: true,
});

const parseDateFromName = (filename: string) => {
  const match = filename.match(/(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : filename;
};

const stripExtension = (filename: string) => filename.replace(/\.[^/.]+$/, '');

const IGNORE_PREFIX = 'ignore_';

// Optional per-file overrides keyed by filename
const descriptionOverrides: Record<string, string> = {
  '2025-05-23.mp4': 'The best egg-fried rice in SF',
  '2024-07-28.mp4': 'Baby Seagull Rescue Mission',
  // '2025-05-10-06.png': 'Example description shown in the gallery.',
};
const titleOverrides: Record<string, string> = {
  // '2025-05-10-06.png': 'Custom Title',
};
const timelineLabelOverrides: Record<string, string> = {
  '2023-03-01.jpeg': '399开张',
  '2024-10-20-1.jpeg': 'Bye Caroline',
  '2024-11-17-1.jpeg': '吴情吴义',
  '2025-10-31.jpeg': 'Halloween',
  '2025-12-04.jpeg': 'Last Day',
};

type MediaEntry = {
  filename: string;
  src: string;
  previewSrc?: string;
  embedUrl?: string;
  timelineLabel?: string;
  type: MediaType;
  sortKey: string;
  dateOverride?: string;
  description?: string;
  titleOverride?: string;
};

const mediaEntries: MediaEntry[] = Object.entries(mediaModules)
  .map(([path, mod]) => {
    const filename = path.split('/').pop() || path;
    if (filename.toLowerCase().startsWith(IGNORE_PREFIX)) return null;
    const src = (mod as { default: string }).default;
    const lower = filename.toLowerCase();
    const ext = lower.split('.').pop() || '';
    const isVideo = ext === 'mp4' || ext === 'mov';
    const isImage = ext === 'jpg' || ext === 'jpeg' || ext === 'png';
    if (!isVideo && !isImage) return null;
    const type: MediaType = isVideo ? 'video' : 'image';
    const sortKey = parseDateFromName(filename);

    const entry: MediaEntry = {
      filename,
      src,
      previewSrc: src,
      type,
      sortKey,
    };
    return entry;
  })
  .filter((entry): entry is MediaEntry => entry !== null);

// External embeds (e.g., Vimeo)
mediaEntries.push({
  filename: 'Ignore_2025-05-10-06.png',
  src: 'https://vimeo.com/1083175160/86c067f4f9',
  previewSrc: vimeoPreview,
  embedUrl: 'https://player.vimeo.com/video/1083175160?h=86c067f4f9',
  type: 'embed',
  sortKey: '2025-05-10',
  dateOverride: '2025-05-10',
  titleOverride: '2025-05-10',
  description: 'Mini-film Festival Winner',
  timelineLabel: '春天里',
});

mediaEntries.push({
  filename: '2024-10-20.mp4',
  type: 'embed',
  sortKey: '2024-10-20',
  dateOverride: '2024-10-20',
  src: 'https://player.vimeo.com/video/1144210034', // Use embed URL as src for safety
  previewSrc: vimeoPreview20240823,
  embedUrl: 'https://player.vimeo.com/video/1144210034',
  titleOverride: '2024-10-20',
  description: 'Who makes the most authentic old Beijing Zhajiang Noodles?',
  timelineLabel: '炸酱面大赛',
});

export const MEDIA_DATA: MediaItem[] = mediaEntries
  .sort((a, b) => a.sortKey.localeCompare(b.sortKey) || a.filename.localeCompare(b.filename))
  .map((entry, idx) => ({
    id: String(idx + 1),
    type: entry.type,
    src: entry.src,
    previewSrc: entry.previewSrc,
    embedUrl: entry.embedUrl,
    timelineLabel: entry.timelineLabel || timelineLabelOverrides[entry.filename],
    // Title is just the date (parsed from filename or override), ignoring suffixes.
    title: (entry.dateOverride || parseDateFromName(entry.filename)),
    description: entry.description ?? descriptionOverrides[entry.filename] ?? '',
    date: entry.dateOverride || parseDateFromName(entry.filename),
    filename: entry.filename, // Populate filename
  }));
