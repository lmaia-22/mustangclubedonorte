'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurFade from './magicui/blur-fade';

gsap.registerPlugin(ScrollTrigger);

interface FullscreenVideoProps {
  videoSrc: string;
}

const BLUR_FADE_DELAY = 0.04;

const FullscreenVideo = React.forwardRef<HTMLDivElement, FullscreenVideoProps>(
  ({ videoSrc }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const infoTextRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false); // State to manage video load

    useEffect(() => {
      const videoElement = videoRef.current;
      const infoTextElement = infoTextRef.current;
      const arrowElement = arrowRef.current;

      if (videoElement) {
        // Use loadedmetadata for faster initial display
        // Video can start playing while still buffering
        const handleVideoReady = () => {
          setIsVideoLoaded(true);
        };

        // Try multiple events for better compatibility
        if (videoElement.readyState >= 1) {
          // Metadata already loaded
          handleVideoReady();
        } else {
          // Using { once: true } so listeners auto-remove after first call
          videoElement.addEventListener('loadedmetadata', handleVideoReady, { once: true });
          videoElement.addEventListener('loadeddata', handleVideoReady, { once: true });
        }

        // Video and GSAP animations
        if (isVideoLoaded && infoTextElement && arrowElement) {
          gsap.to(videoElement, {
            duration: 1.5,
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            delay: 2.5,
            transformOrigin: 'center center',
          });

          gsap.to(infoTextElement, {
            duration: 1.5,
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            delay: 0.5,
          });

          gsap.fromTo(
            arrowElement,
            { y: 0 },
            {
              y: 40,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut',
              duration: 0.8,
            }
          );

          ScrollTrigger.create({
            trigger: videoElement,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;

              gsap.to(videoElement, {
                scale: 1 - progress * 0.2,
                opacity: 1 - progress * 0.5,
                overwrite: 'auto',
                transformOrigin: 'center center',
              });

              gsap.to(infoTextElement, {
                y: progress * 100,
                opacity: 1 - progress,
                overwrite: 'auto',
              });
            },
          });
        }
      }

      return () => {
        // Event listeners auto-cleanup due to { once: true }
        // Cleanup GSAP animations
        gsap.killTweensOf(videoElement);
        gsap.killTweensOf(infoTextElement);
        gsap.killTweensOf(arrowElement);
        // Cleanup ScrollTrigger instances
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars?.trigger === videoElement) {
            trigger.kill();
          }
        });
      };
    }, [isVideoLoaded, videoSrc]); // Re-run the effect when the video is loaded or src changes

    return (
      <div ref={ref} className='relative h-screen w-full max-w-full overflow-hidden'>
        <video
          ref={videoRef}
          src={videoSrc}
          className='absolute left-0 top-0 h-full w-full object-cover opacity-0 will-change-transform'
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Background video"
        />
        {isVideoLoaded && (
          <div ref={infoTextRef} className='absolute inset-x-0 bottom-0 text-center'>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div ref={arrowRef} className='mb-24 text-white'>
                <p>Desliza para baixo</p>
                &#x2193; {/* Unicode for downward arrow */}
              </div>
            </BlurFade>
          </div>
        )}
      </div>
    );
  }
);

FullscreenVideo.displayName = 'FullscreenVideo';
export default FullscreenVideo;
