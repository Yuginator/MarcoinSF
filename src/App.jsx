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

    const handleWheel = (e) => {
      const isTouchpad = Math.abs(e.deltaX) > 0 || Number.isInteger(e.deltaY) === false;

      // If purely vertical wheel (mouse), map to horizontal
      if (!isTouchpad && e.deltaY !== 0 && e.deltaX === 0) {
        e.preventDefault();
        lenis.scrollTo(lenis.scroll + e.deltaY * 2.5, { immediate: true })
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
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
