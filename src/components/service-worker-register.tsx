'use client';

import { useEffect, useState } from 'react';

interface ServiceWorkerRegisterProps {
  children: React.ReactNode;
}

export function ServiceWorkerRegister({ children }: ServiceWorkerRegisterProps) {
  const [isOnline, setIsOnline] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if service workers are supported
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[SW] Service Worker registered:', registration);

          // Check if there's an update available
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available
                  console.log('[SW] New service worker available');
                  setIsInstalled(true);
                }
              });
            }
          });

          // Update service worker when page becomes visible
          window.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              registration.update();
            }
          });

          // Periodic updates every hour
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);
        })
        .catch((error) => {
          console.error('[SW] Service Worker registration failed:', error);
        });

      // Handle online/offline status
      const handleOnline = () => {
        setIsOnline(true);
        console.log('[SW] App is online');
      };

      const handleOffline = () => {
        setIsOnline(false);
        console.log('[SW] App is offline');
      };

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      // Set initial online status
      setIsOnline(navigator.onLine);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  return (
    <>
      {/* Offline Indicator */}
      {!isOnline && (
        <div className='fixed bottom-20 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 transform animate-fade-in-up px-4 sm:px-0'>
          <div className='flex items-center gap-2 rounded-lg bg-yellow-500/95 px-3 py-2 text-xs sm:text-sm font-medium text-white shadow-lg backdrop-blur-sm'>
            <svg className='h-4 w-4 shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M18.364 5.636a9 9 0 010 12.728m0 0l-3.182-3.182m3.182 3.182L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.83-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414' />
            </svg>
            <span className='truncate'>Modo Offline - Conteúdo em cache disponível</span>
          </div>
        </div>
      )}

      {/* Service Worker Update Available */}
      {isInstalled && (
        <div className='fixed bottom-20 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 transform rounded-lg bg-blue-500 px-3 py-2 text-xs sm:text-sm font-medium text-white shadow-lg animate-fade-in-up'>
          <span className='truncate'>✨ Nova versão disponível! </span>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className='ml-2 underline'
          >
            Recarregar
          </button>
        </div>
      )}

      {children}
    </>
  );
}

