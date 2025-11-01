'use client';

import { useEffect, useState } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Set initial state
    setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className='fixed bottom-24 left-1/2 z-50 -translate-x-1/2 transform animate-fade-in-up'>
      <div className='flex items-center gap-2 rounded-lg bg-yellow-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm'>
        <WifiOff className='h-4 w-4' />
        <span>Modo Offline</span>
      </div>
    </div>
  );
}

