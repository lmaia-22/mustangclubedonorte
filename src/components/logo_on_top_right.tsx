"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ScrollLogoProps {
  logoSrc: string;
  altText: string;
}

const ScrollLogo: React.FC<ScrollLogoProps> = ({ logoSrc, altText }) => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(logoRef.current, {
          duration: 0.5,
          opacity: 1,
          y: 10,
          ease: "power3.out",
        });
      } else {
        gsap.to(logoRef.current, {
          duration: 0.5,
          opacity: 0,
          y: -10,
          ease: "power3.in",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={logoRef}
      className="fixed top-4 right-4 z-50 opacity-0 transform -translate-y-60 lg:-translate-y-20"
    >
      <img src={logoSrc} alt={altText} className=" w-28 h-20 lg:w-40 lg:h-32" />
    </div>
  );
};

export default ScrollLogo;
