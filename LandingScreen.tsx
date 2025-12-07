import React, { useEffect, useState } from 'react';
import { MEDIA_DATA } from './mediaData';
import coverVideo from './assets/cover/cover.mp4';

interface LandingScreenProps {
  onStartTransition: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onStartTransition }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  
  // 1. Preloading Simulation
  useEffect(() => {
    let loaded = 0;
    const total = MEDIA_DATA.length;
    
    const preloadImage = (src: string) => {
        return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
        });
    };

    const loadAll = async () => {
        const promises = MEDIA_DATA.map(item => 
            preloadImage(item.previewSrc || item.src).then(() => {
                loaded++;
                setLoadingProgress(Math.floor((loaded / total) * 100));
            })
        );
        await Promise.all(promises);
        setTimeout(() => setIsReady(true), 500);
    };
    
    loadAll();
  }, []);

  const handleClick = () => {
      setHasClicked(true);
      // Wait a tiny bit for the visual fade to start before triggering rain logic
      // This is purely for visual polish
      setTimeout(() => {
        onStartTransition();
      }, 100);
  };

  // Render Loading State
  if (loadingProgress < 100 && !isReady) {
      return (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000">
               <div className="w-64 h-2 bg-gray-200 rounded overflow-hidden">
                   <div 
                    className="h-full bg-black transition-all duration-200"
                    style={{ width: `${loadingProgress}%` }}
                   />
               </div>
               <p className="mt-4 font-bold text-gray-400 animate-pulse">Loading Gallery...</p>
          </div>
      );
  }

  // Render Main Landing
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${hasClicked ? 'pointer-events-none' : ''}`}>
        
        {/* Main Card - Fades out on click */}
        <div className={`relative z-20 bg-white p-4 shadow-2xl border-2 border-gray-100 transform scale-100 transition-all duration-500 ease-out ${hasClicked ? 'opacity-0 scale-95' : 'hover:scale-105'}`}>
                <div className="w-80 aspect-[4/5] flex flex-col items-center">
                <div className="w-full h-64 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in">
                        <video 
                        src={coverVideo} 
                        className="w-full h-full object-cover grayscale contrast-125 opacity-80"
                        muted
                        loop
                        autoPlay
                        playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <h1 className="text-3xl text-center font-bold mb-1">The Secret Life of Warco Mu</h1>
                <p className="text-gray-500 text-sm text-center mb-6">2021.8-2025.12</p>
                   <p className="text-gray-800 text-m text-center mb-6">Chef of SF's Finest Egg Fried Rice, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys, Award-winning Transgender Actor, Watermelon Annihilator, Chinatown Mafia, Master of Cantonese, Slayer of 100+ Arkvelds,连续戒烟成功者...</p>
                
                {/* @ts-ignore */}
                <wired-button elevation={2} onClick={handleClick} className="bg-black text-white font-bold tracking-widest cursor-pointer">
                    PAY RESPECT
                {/* @ts-ignore */}
                </wired-button>
                </div>
        </div>
    </div>
  );
};

export default LandingScreen;
