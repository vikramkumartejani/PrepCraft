import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import OrbitingCirclesDemo from "./OrbitingCirclesDemo";

const Hero = () => {
  return (
    <div
      className="pt-[20px] lg:pt-[36px] bg-[#071125] relative w-full md:h-[1100px] sm:h-[800px] h-[500px]  overflow-hidden"
      style={{ backgroundImage: 'url("/assets/hero-bg.png")' }}
    >
      <Image
        src="/assets/cube.png"
        alt="cube"
        width={200.72}
        height={186.07}
        className="absolute top-[142px] xl:left-[80px] lg:left-[20px] left-[10px] z-0"
      />
      <Navbar />

      <div className="mt-10 relative z-30 max-w-[1180px] w-full mx-auto h-full">
        <OrbitingCirclesDemo />
      </div>
      <Image
        src="/assets/hero-frame.svg"
        alt="hero-frame"
        width={1920}
        height={608}
        className="absolute bottom-0"
      />
    </div>
  );
};

export default Hero;
