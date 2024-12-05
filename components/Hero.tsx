import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import OrbitingCirclesDemo from './OrbitingCirclesDemo';

const Hero = () => {
  return (
    <div
      className="pt-[20px] lg:pt-[36px] bg-[#071125] relative w-full h-full"
      style={{ backgroundImage: 'url("/assets/hero-bg.png")' }}
    >
      <Navbar />


      {/* Hero section content */}
      <div className="mt-10 relative z-30 max-w-[1180px] w-full mx-auto h-full">
        <OrbitingCirclesDemo/>
      </div>
        <Image src="/assets/hero-frame.svg" alt="hero-frame" width={1920} height={608} />
    </div>
  );
};

export default Hero;


