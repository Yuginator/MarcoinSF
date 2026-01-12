# Project Architecture & Concepts

This document outlines the conceptual model of the **MarcoGallery** application.

## 1. Core Concept: The "Infinite" Wall
The application acts as a single, extremely wide horizontal canvas. Unlike traditional web pages that scroll vertically, this gallery lays out all ~100+ items in a single row (`flex-row`).

### Key Technologies
-   **React**: Component structure.
-   **Tailwind CSS**: Styling and layout.
-   **Lenis**: Standardization of scrolling mechanics (inertia, smoothing) and normalization across devices.
-   **Framer Motion**: Parallax effects and declarative animations.

## 2. Module Breakdown

### `src/App.jsx` (The Engine)
This is the application entry point. Its primary job is **Input Normalization**.
-   **Lenis Setup**: Initializes the smooth scroll library.
-   **Scroll Mapping**: Contains a custom `ScrollMapper` component. Desktop users intuitively scroll *down* with a mouse wheel. This module captures those vertical events (`deltaY`) and translates them into horizontal scroll commands (`scrollTo`), allowing users to navigate the horizontal gallery using standard vertical motions.

### `src/components/GalleryTrack.jsx` (The World)
This component represents the **Physical Space** of the gallery.
-   **Layout**: A simple flex container holding all `ArtFrame` items.
-   **Parallax Layers**: It contains `motion.div` layers (Background and Foreground).
    -   Using `useScroll`, it tracks the global scroll progress.
    -   It applies different `x` (horizontal) transform speeds to these layers relative to the main content.
    -   *Concept*: Background moves *slower* (creating depth behind), Foreground moves *faster* (creating depth in front).

### `src/components/ArtFrame.jsx` (The Artifact)
This represents a **Single Artwork**.
-   **Performance**: It is "aware" of its own visibility.
    -   **Images**: Use native `loading="lazy"`.
    -   **Videos**: Use an `IntersectionObserver`. They only play (`video.play()`) when they enter the viewport and pause (`video.pause()`) when they leave. This is critical for performance with 100+ items.
-   **Aesthetic**: Handles the randomness (rotation, margin) to give the "hand-drawn" feel.

### `src/data/galleryData.js` (The Source)
Currently a mock generator. In a real app, this would fetch from a CMS or an API. It forces a specific structure (`id`, `type`, `src`, `dims`) on all content so components don't have to guess.

## 3. The Coordinate System
-   The app allows the document to expand horizontally naturally (`w-fit` on `<main>`).
-   The browser calculates the total width (e.g., ~50,000px).
-   Lenis takes over the scroll behavior to make traversing this massive width feel smooth and weightless.
