import { useRef, useEffect, useState } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { Leva } from 'leva'
import { AnimatePresence, motion } from 'framer-motion'
import GalleryTrack from './components/GalleryTrack'
import LandingPage from './components/LandingPage'
import GalleryMask from './components/GalleryMask'
import FrameTestPage from './components/FrameTestPage'
import './index.css'

function App() {
  // Temporary test route check
  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get('test') === 'frames') {
    return <FrameTestPage />;
  }

  const [hasEntered, setHasEntered] = useState(false);

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  useEffect(() => {
    // ... (keep existing handleWheel logic if needed, or cleanup)
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        // Horizontal mapping logic
      }
    }
  }, [])

  return (
    <ReactLenis root options={{ orientation: 'horizontal', gestureOrientation: 'both' }}>
      <Leva hidden />
      <ScrollMapper hasEntered={hasEntered} />
      <main className="bg-[#fdfaf6] text-slate-800 min-h-screen w-fit antialiased no-scrollbar">
        <AnimatePresence>
          {!hasEntered ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
              className="fixed inset-0 z-50 w-screen h-screen overflow-hidden"
            >
              <LandingPage onEnter={() => setHasEntered(true)} />
            </motion.div>
          ) : null}
          {hasEntered && (
            <motion.div
              key="gallery"
              initial={{ opacity: 1 }} // Start fully visible (masked by GalleryMask)
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <GalleryMask>
                <GalleryTrack />
              </GalleryMask>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </ReactLenis>
  )
}

// Helper component to access Lenis context
function ScrollMapper({ hasEntered }) {
  const lenis = useLenis()

  // Force resize update when entering gallery
  useEffect(() => {
    if (hasEntered && lenis) {
      setTimeout(() => lenis.resize(), 100) // Small delay to ensure DOM is ready
    }
  }, [hasEntered, lenis])

  useEffect(() => {
    if (!lenis) return

    const handleWheel = (e) => {
      const isTouchpad = Math.abs(e.deltaX) > 0 || Number.isInteger(e.deltaY) === false;

      // If purely vertical wheel (mouse), map to horizontal
      if (!isTouchpad && e.deltaY !== 0 && e.deltaX === 0) {
        e.preventDefault(); // Prevent standard vertical scroll attempt
        // Determine scroll target
        lenis.scrollTo(lenis.scroll + e.deltaY * 2.5, { immediate: true })
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [lenis])

  return null
}

export default App
