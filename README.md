# Wired 3D Gallery

A unique, minimalist 3D photo and video gallery built with React and Three.js. It features a "Wired" hand-drawn aesthetic using `wired-elements` and custom sketchy WebGL geometries.

## Features

- **3D Infinite Scroll**: Navigate through a floating corridor of memories by simply scrolling (mouse or touch).
- **Auto-Scroll**: Toggle automatic camera movement with adjustable speed; manual scroll sensitivity is separately tunable.
- **Timeline & Pins**: Bottom timeline shows progress, timestamp pins for notable moments, and auto-generated year pins; clicking a pin jumps to that media.
- **Mixed Media**: Supports images, locally hosted videos, and embedded Vimeo/TouT links (with preview stills).
- **Smart Autoplay**: Videos automatically play when they approach the camera and pause/fade when you leave.
- **Wired Aesthetic**: Hand-drawn UI elements and custom ragged borders for 3D objects.
- **Immersive Overlay**: Click any item to view it in a cinematic full-screen mode (with controls for embeds).
- **Music Player**: Integrated background music player with playlist support and proximity-based volume fading.
- **Landing Interaction**: “Pay Respect” landing card with cover video, typing subtitle + typing SFX, hearts-on-hold interaction, and entry transition SFX.
- **Lazy Loading**: Media textures/video elements load only when near the camera; disposed when far to reduce memory (helps mobile stability).
- **Mobile Tweaks**: Hidden scrollbars, preload fallback, and default sensitivity boost for coarse pointers.

## Project Structure

- **App.tsx**: Main application logic, including the Three.js render loop, scroll mapping, timeline pins, lazy media loading, and UI components.
- **mediaData.ts**: Central configuration for media, music tracks, timeline labels, and per-file overrides (titles, descriptions).
- **LandingScreen.tsx**: Initial title screen with preload, typing animation/SFX, hearts interaction, and entry transition.
- **index.html**: Entry point loading external styles, fonts (Gloria Hallelujah), and the Wired Elements library.

## How to Customize

### Adding/Removing Media
`MEDIA_DATA` is auto-built from files in `./assets/media` and sorted by filename date (e.g., `2025-12-04.jpeg`). Embeds are added manually in `mediaData.ts`. You can override titles, descriptions, and timeline labels via the override maps there.

Notes:
- `type: 'image' | 'video' | 'embed'`
- `previewSrc` is used for embed thumbnails.
- `timelineLabelOverrides` lets you add pins for specific files (e.g., `'2025-12-04.jpeg': '最后一日'`).
- The last item is treated as the “Grand Finale” and centered.

### Changing Music
Modify the `MUSIC_TRACKS` array in `mediaData.ts`.

### Timeline Pins
- Set `timelineLabel` on a media item (or via `timelineLabelOverrides`) to create a timestamp pin with a label.
- Year pins are auto-generated from the first media per year.

### Landing Hearts
- Hold anywhere on the landing screen to grow a heart (balloon SFX), release to leave a permanent mark at that size. Hearts clear/interaction disables when “PAY RESPECT” is clicked.

## Tech Stack

- **React**: UI Framework.
- **Three.js**: 3D Rendering engine.
- **Wired Elements**: Hand-drawn UI components.
- **Tailwind CSS**: Utility-first CSS for layout.
