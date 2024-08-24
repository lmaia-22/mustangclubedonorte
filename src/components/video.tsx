'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurFadeText from './magicui/blur-fade-text';
import { DATA } from '@/data/resume';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
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

        // Animate on scroll
        ScrollTrigger.create({
          trigger: videoElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            gsap.to(videoElement, {
              scale: 0.8,
              opacity: 0.5,
            });
            gsap.to(infoTextElement, {
              y: 100,
              opacity: 0,
            });
          },
          onLeaveBack: () => {
            gsap.to(videoElement, {
              scale: 1,
              opacity: 1,
            });
            gsap.to(infoTextElement, {
              y: 0,
              opacity: 1,
            });
          },
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, []);

    return (
      <div ref={ref} className='h-screen w-screen '>
        <video
          ref={videoRef}
          src={videoSrc}
          className='absolute left-0 top-0 h-full w-full scale-110 object-cover opacity-0'
          autoPlay
          muted
          loop
        ></video>
        <div
          ref={infoTextRef}
          className='absolute inset-x-0 bottom-0 text-center'
        >
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div ref={arrowRef} className='mb-24 text-white'>
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
