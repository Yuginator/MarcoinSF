# Wired 3D Gallery

A unique, minimalist 3D photo and video gallery built with React and Three.js. It features a "Wired" hand-drawn aesthetic using `wired-elements` and custom sketchy WebGL geometries.

## Features

- **3D Infinite Scroll**: Navigate through a floating corridor of memories by simply scrolling.
- **Auto-Scroll**: Toggle an automatic camera movement with adjustable speed via the settings panel.
- **Timeline Timestamp**: Hover over the bottom timeline to see exactly when each photo was taken.
- **Mixed Media**: Supports both high-resolution Images and Videos.
- **Smart Autoplay**: Videos automatically play when they approach the camera and pause when you leave.
- **Wired Aesthetic**: Hand-drawn UI elements and custom ragged borders for 3D objects.
- **Immersive Overlay**: Click any item to view it in a cinematic full-screen mode.
- **Music Player**: Integrated background music player with playlist support.

## Project Structure

- **App.tsx**: Main application logic, including the Three.js render loop, scroll mapping, and UI components.
- **mediaData.ts**: Central configuration file for all media content and music tracks.
- **LandingScreen.tsx**: The initial title screen.
- **index.html**: Entry point loading external styles, fonts (Gloria Hallelujah), and the Wired Elements library.

## How to Customize

### Adding/Removing Media
Open `mediaData.ts`. You will see a `MEDIA_DATA` array.
To add a new item, append an object with the following structure:

```typescript
{
  id: 'unique-id',
  type: 'image', // or 'video'
  title: 'My Title',
  description: 'Description...',
  date: 'Jan 01, 2024',
  src: 'https://path/to/image.jpg'
}
```

The gallery layout is automatically generated based on this array. The last item in the array is always treated as the "Grand Finale" and centered.

### Changing Music
Modify the `MUSIC_TRACKS` array in `mediaData.ts`.

## Tech Stack

- **React**: UI Framework.
- **Three.js**: 3D Rendering engine.
- **Wired Elements**: Hand-drawn UI components.
- **Tailwind CSS**: Utility-first CSS for layout.