import React, { useEffect, useState, useRef } from 'react';

interface TennisRainTransitionProps {
  onCovered: () => void; // Triggered when rain hits bottom
  onComplete: () => void; // Triggered when rain clears
}

interface TennisBall {
  id: number;
  colIndex: number;
  left: number;      // %
  duration: number;  // s
  rotation: number;  // deg
}

const TennisRainTransition: React.FC<TennisRainTransitionProps> = ({ onCovered, onComplete }) => {
  const [balls, setBalls] = useState<TennisBall[]>([]);
  const phaseRef = useRef<'raining' | 'clearing'>('raining');
  const ballIdCounter = useRef(0);
  const rainIntervalRef = useRef<number | null>(null);

  // Configuration
  const BALL_SIZE_PX = 40; 
  const MIN_DURATION = 1.0; 
  const MAX_DURATION = 1.5; 
  const SPAWN_INTERVAL = 80; // Spawn a row every 80ms

  useEffect(() => {
    // 1. Calculate Grid
    const viewportWidth = window.innerWidth;
    const cols = Math.ceil(viewportWidth / BALL_SIZE_PX);
    
    // 2. Spawn Logic
    const spawnRow = () => {
      if (phaseRef.current === 'clearing') return;

      const newBalls: TennisBall[] = [];
      
      for (let i = 0; i < cols; i++) {
        // Add some randomness so it doesn't look like a perfect grid
        // But ensure every column gets a ball roughly at the same time
        const offset = (Math.random() - 0.5) * 10; // +/- 5% jitter
        
        newBalls.push({
          id: ballIdCounter.current++,
          colIndex: i,
          left: (i / cols) * 100 + (Math.random() * 2), // Spread slightly
          duration: MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION),
          rotation: Math.random() * 360,
        });
      }

      setBalls(prev => [...prev, ...newBalls]);
    };

    // Start Raining
    rainIntervalRef.current = window.setInterval(spawnRow, SPAWN_INTERVAL);

    // 3. Detect "Covered" (Time based estimation for performance)
    // The time it takes for the fastest ball to hit the bottom + a small buffer
    const timeUntilCovered = MIN_DURATION * 1000 + 200;
    
    const coverTimer = setTimeout(() => {
        onCovered(); // <--- TRIGGER SCENE CHANGE HERE
        
        // Continue raining for a bit longer after covering, then clear
        setTimeout(() => {
            phaseRef.current = 'clearing';
            if (rainIntervalRef.current) clearInterval(rainIntervalRef.current);
        }, 1500); // Rain for 1.5s more after covering

    }, timeUntilCovered);

    return () => {
      if (rainIntervalRef.current) clearInterval(rainIntervalRef.current);
      clearTimeout(coverTimer);
    };
  }, [onCovered]);

  const handleAnimationEnd = (id: number) => {
    setBalls(prev => {
      const remaining = prev.filter(b => b.id !== id);
      if (phaseRef.current === 'clearing' && remaining.length === 0) {
        // All clear
        setTimeout(onComplete, 0);
      }
      return remaining;
    });
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <style>
        {`
          @keyframes tennisFall {
            0% {
              transform: translateY(-60px) rotate(0deg);
            }
            100% { transform: translateY(110vh) rotate(var(--rot)); }
          }
        `}
      </style>
      
      {balls.map(ball => (
        <div
          key={ball.id}
          onAnimationEnd={() => handleAnimationEnd(ball.id)}
          style={{
            position: 'absolute',
            left: `${ball.left}%`,
            top: '-60px',
            width: `${BALL_SIZE_PX}px`,
            height: `${BALL_SIZE_PX}px`,
            fontSize: `${BALL_SIZE_PX}px`,
            lineHeight: '1',
            textAlign: 'center',
            // @ts-ignore
            '--rot': `${ball.rotation}deg`,
            animationName: 'tennisFall',
            animationDuration: `${ball.duration}s`,
            // Ease-in curve to mimic constant acceleration without abrupt speed jumps
            animationTimingFunction: 'cubic-bezier(0.3, 0.1, 0.7, 1)',
            animationFillMode: 'forwards',
          }}
        >
          🎾
        </div>
      ))}
    </div>
  );
};

export default TennisRainTransition;
