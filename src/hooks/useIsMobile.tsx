'use client';
import { useState, useEffect } from 'react';

// Correctly define and export the hook as a named export
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile devices
    };

    checkMobile(); // Check on initial render
    window.addEventListener('resize', checkMobile); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', checkMobile); // Clean up on component unmount
    };
  }, []);

  return isMobile;
}
