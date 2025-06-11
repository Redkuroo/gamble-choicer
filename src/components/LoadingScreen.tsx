'use client';

import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after video ends
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this time based on your video length

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-fit"
        onEnded={() => setIsLoading(false)}
      >
        <source src="/loader.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingScreen; 