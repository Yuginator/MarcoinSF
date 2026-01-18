import { useRef, useEffect, useState } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { Leva } from 'leva'
import { AnimatePresence, motion } from 'framer-motion'
import GalleryTrack from './components/GalleryTrack'
import LandingPage from './components/LandingPage'
import GalleryMask from './components/GalleryMask'
import FrameTestPage from './components/FrameTestPage'
import Preloader from './components/Preloader'
import FpsMonitor from './components/FpsMonitor'
import './index.css'

// Helper component to access Lenis context
function ScrollMapper({ hasEntered }) {
  const lenis = useLenis()

  // Force resize update when entering gallery
  useEffect(() => {
    if (hasEntered && lenis) {
      setTimeout(() => lenis.resize(), 100)
    }
  }, [hasEntered, lenis])

  useEffect(() => {
    if (!lenis) return

    // OMNI-DIRECTIONAL WHEEL: Sum X and Y deltas
    const handleWheel = (e) => {
      // allow default browser zoom (ctrl+wheel)
      if (e.ctrlKey) return;

      const delta = e.deltaX + e.deltaY;
      if (delta !== 0) {
        e.preventDefault();

        // Cap the delta to avoid "Warp Speed" on trackpads
        const cappedDelta = Math.min(Math.max(delta, -25), 25);

        // Restore 'immediate: true' for snappy/native feel, but use capped delta
        // Multiplier 1.5 for sensitivity
        lenis.scrollTo(lenis.scroll + cappedDelta * 1.5, { immediate: true })
      }
    }

    // OMNI-DIRECTIONAL TOUCH: Map Vertical & Horizontal drag to scroll + INERTIA
    let touchStartX = 0;
    let touchStartY = 0;
    let initialScroll = 0;

    // Inertia Tracking
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let animationFrameId = null;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      lastX = touchStartX;
      lastY = touchStartY;
      velocityX = 0;
      velocityY = 0;
      initialScroll = lenis.scroll;

      // Stop any existing inertia fling
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      lenis.stop(); // Temporarily stop auto-scroll or existing momentum
      lenis.start();
    };

    const handleTouchMove = (e) => {
      if (e.cancelable) e.preventDefault();

      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;

      // Calculate pure movement delta from start
      const totalMoveX = touchStartX - x;
      const totalMoveY = touchStartY - y;

      // Calculate instantaneous velocity (current - last)
      // This runs on every touchmove event (high frequency)
      velocityX = lastX - x;
      velocityY = lastY - y;

      lastX = x;
      lastY = y;

      const totalDelta = totalMoveX + totalMoveY;
      lenis.scrollTo(initialScroll + totalDelta, { immediate: true });
    };

    const handleTouchEnd = () => {
      // Combine velocities and clamp to prevent "Warp Speed"
      // Max velocity 30 prevents the gallery from flying too fast
      const rawVelocity = velocityX + velocityY;
      const velocity = Math.min(Math.max(rawVelocity, -30), 30);

      // Apply Momentum if velocity is significantx
      if (Math.abs(velocity) > 0.1) {
        // Power factor determines how far the "throw" goes
        const power = 60; // Increased from 15 for much stronger fling
        const target = lenis.scroll + (velocity * power);

        lenis.scrollTo(target, {
          duration: 2.5, // Increased from 1.2s for longer glide
          easing: (t) => 1 - Math.pow(1 - t, 4) // Quartic ease out (smoother tail)
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [lenis])

  return null
}

function App() {
  // Temporary test route check
  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get('test') === 'frames') {
    return <FrameTestPage />;
  }

  const [isLoading, setIsLoading] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const [isGalleryReady, setIsGalleryReady] = useState(false);

  return (
    <ReactLenis root options={{ orientation: 'horizontal', gestureOrientation: 'both' }}>
      <Leva hidden />
      {/* <FpsMonitor /> */}
      <ScrollMapper hasEntered={hasEntered} />
      <main className="bg-[#fdfaf6] text-slate-800 min-h-screen w-full antialiased no-scrollbar">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
          ) : !hasEntered ? (
            <LandingPage key="landing" onEnter={() => setHasEntered(true)} />
          ) : (
            <motion.div
              key="gallery"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <GalleryMask isReady={isGalleryReady}>
                <GalleryTrack onReady={setIsGalleryReady} />
              </GalleryMask>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </ReactLenis>
  )
}

export default App
