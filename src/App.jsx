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
        // 1.5 multiplier for sensitivity
        lenis.scrollTo(lenis.scroll + delta * 1.5, { immediate: true })
      }
    }

    // OMNI-DIRECTIONAL TOUCH: Map Vertical & Horizontal drag to scroll
    let touchStartX = 0;
    let touchStartY = 0;
    let initialScroll = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      initialScroll = lenis.scroll;
    };

    const handleTouchMove = (e) => {
      // Prevent default Pull-to-Refresh etc.
      // We take full control.
      if (e.cancelable) e.preventDefault();

      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;

      const deltaX = touchStartX - x;
      const deltaY = touchStartY - y;

      // Sum deltas: Dragging Left (positive deltaX) = Scroll Right (Increase)
      // Dragging Up (positive deltaY) = Scroll Right (Increase)
      const totalDelta = deltaX + deltaY;

      lenis.scrollTo(initialScroll + totalDelta, { immediate: true });
    };

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
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
      <FpsMonitor />
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
