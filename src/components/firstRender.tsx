'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface FullScreenImageProps {
  imageUrl: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ imageUrl }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(imageRef.current, { visibility: 'hidden' });
        },
      });

      // Initial settings for the image
      gsap.set(imageRef.current, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        borderRadius: '0%',
      });

      // Car revving up effect
      tl.to(imageRef.current, {
        duration: 0.5,
        scale: 1.05,
        ease: 'power2.inOut',
      })
        .to(imageRef.current, {
          duration: 0.3,
          scale: 0.95,
          ease: 'power2.inOut',
        })
        .to(imageRef.current, {
          duration: 0.2,
          scale: 1.02,
          ease: 'power2.inOut',
        });

      // Take-off effect
      tl.to(imageRef.current, {
        duration: 1.5,
        scale: 0.1, // Scale down as if the car is speeding off
        y: '-200%', // Move up off the screen
        rotate: 15, // Slight rotation for added effect
        borderRadius: '50%',
        ease: 'power4.in',
      });
      return () => {
        // Kill the timeline if it's still running
        tl.kill();

        // Optionally reset the image to its original state or remove any GSAP applied properties
        gsap.set(imageRef.current, {
          clearProps: 'all', // This will remove all inline styles added by GSAP
        });
      };
    }
  }, []);

  return (
    <div ref={imageRef}>
      <Image
        priority={true}
        alt='Full'
        src={imageUrl}
        width={0}
        height={0}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          borderRadius: 'inherit',
        }}
        sizes='100vw'
      />
    </div>
  );
};

export default FullScreenImage;
