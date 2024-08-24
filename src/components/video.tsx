'use client';
import React, { useEffect, useRef } from 'react';
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

    useEffect(() => {
      const videoElement = videoRef.current;
      const infoTextElement = infoTextRef.current;
      const arrowElement = arrowRef.current;

      if (videoElement && infoTextElement && arrowElement) {
        // Animate the video to fullscreen on load
        gsap.to(videoElement, {
          duration: 1.5,
          scale: 1,
          opacity: 1,
          ease: 'power3.out',
          delay: 2.5,
        });

        // Animate the info text appearance
        gsap.to(infoTextElement, {
          duration: 1.5,
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: 0.5,
        });

        // Animate the bouncing arrow
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

        // Adjust ScrollTrigger settings to handle scrolling correctly
        ScrollTrigger.create({
          trigger: videoElement,
          start: 'top top', // Trigger animation when top of the video hits the top of the viewport
          end: 'bottom top', // End animation when bottom of the video hits the top of the viewport
          scrub: true, // Allows smooth scrubbing
          onUpdate: (self) => {
            const progress = self.progress; // Get current scroll progress

            // Scale and fade video based on scroll progress
            gsap.to(videoElement, {
              scale: 1 - progress * 0.2, // Scale down slightly on scroll
              opacity: 1 - progress * 0.5, // Fade out slightly on scroll
              overwrite: 'auto', // Prevents conflicting animations
            });

            // Move and fade info text based on scroll progress
            gsap.to(infoTextElement, {
              y: progress * 100, // Move down slightly on scroll
              opacity: 1 - progress, // Fade out on scroll
              overwrite: 'auto', // Prevents conflicting animations
            });
          },
        });

        // Clean up GSAP animations and ScrollTrigger instances on component unmount
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          gsap.killTweensOf(videoElement);
          gsap.killTweensOf(infoTextElement);
          gsap.killTweensOf(arrowElement);
        };
      }
    }, []);

    return (
      <div ref={ref} className="h-screen w-screen relative">
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute left-0 top-0 h-full w-full scale-110 object-cover opacity-0"
          autoPlay
          muted
          loop
        ></video>
        <div
          ref={infoTextRef}
          className="absolute inset-x-0 bottom-0 text-center"
        >
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div ref={arrowRef} className="mb-24 text-white">
              <p>Desliza para baixo</p>
              &#x2193; {/* Unicode for downward arrow */}
            </div>
          </BlurFade>
        </div>
      </div>
    );
  }
);
FullscreenVideo.displayName = 'FullscreenVideo';
export default FullscreenVideo;
