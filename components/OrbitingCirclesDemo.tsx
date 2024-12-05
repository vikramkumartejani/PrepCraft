import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OrbitingCircles: React.FC = () => {
  const circlePath = {
    rotate: 360,
  };

  const [isLarge, setIsLarge] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 768) {
        setIsLarge(true);
        setIsMedium(false);
      } else if (width >= 640) {
        setIsLarge(false);
        setIsMedium(true);
      } else {
        setIsLarge(false);
        setIsMedium(false);
      }
    };

    // Call on mount to set initial value
    updateScreenSize();

    // Add resize listener
    window.addEventListener("resize", updateScreenSize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const outerLogos = [
    "/assets/creativity.svg",
    "/assets/ai-brain-two.svg",
    "/assets/creativity2.svg",
    "/assets/computer-engineer.svg",
    "/assets/learning.svg",
    "/assets/board-game.svg",
  ];

  const middleLogos = [
    "/assets/creativity2.svg",
    "/assets/computer-engineer.svg",
    "/assets/learning.svg",
    "/assets/ai-brain-two.svg",
    "/assets/board-game.svg",
  ];

  const innerLogos = [
    "/assets/creativity2.svg",
    "/assets/board-game.svg",
    "/assets/computer-engineer.svg",
  ];

  return (
    <div className="flex items-center justify-center mt-[200px] sm:mt-[320px] md:mt-[500px] ">
      {/* Central Title */}
      <div className=" absolute z-20 max-w-[795px] mx-auto w-full text-center px-5">
        <div className="mb-4 bg-[#00000094] w-[150px] md:w-[184px] max-w-full mx-auto h-[25px] md:h-[35px] rounded-[16.64px] flex items-center justify-center gap-2">
          <h4 className="text-[#57A5FF] text-xs md:text-[16.64px] leading-[16.64px] font-medium uppercase">
            A best way to
          </h4>
          <Image
            src="/assets/arrow-rigt.svg"
            alt="arrow-rigt"
            width={12.48}
            height={12.48}
          />
        </div>
        <h1
          className="text-[20px] sm:text-[25px] md:text-[52px] md:leading-[70.72px] font-bold uppercase"
          style={{
            background:
              "linear-gradient(94deg, #FFFFFF 13.31%, #286CFF 100.52%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Where AI Meets Educational Excellence
        </h1>
        <p className="text-[14px] md:text-[16px] md:leading-[29.12px] font-medium text-white mt-2 md:mt-4 max-w-[655px] mx-auto">
          Interactive practice exams with patient AI explanations and engaging
          games like Wordle, Spelling Bee, Chess, and Crosswords for children
          aged 4-14.
        </p>
        <button
          className="my-4 md:my-8 w-[210px] md:w-[250px] max-w-full mx-auto rounded-[90px] h-[40px] md:h-[65px] flex items-center gap-3"
          style={{
            background:
              "linear-gradient(28.63deg, #3B6EFF 10.71%, #3DAEFF 86.11%)",
          }}
        >
          <Image
            src="/assets/get-started-today.svg"
            alt="open-app"
            width={45}
            height={45}
            className="ml-2.5 lg:h-[45px] md:w-[45px] w-[30px] h-[30px]"
          />
          <h2 className="text-[#F8FAFB] font-semibold text-sm sm:text-base md:text-lg leading-[27px]">
            Get started today
          </h2>
        </button>
        <div className="flex items-center flex-col justify-center gap-3">
          <Link
            href="/"
            className="text-[#FFFFFFA3] font-medium text-[15px] md:text-[17px] leading-[16.74px]"
          >
            learn more
          </Link>
          <Image
            src="/assets/arrow-down.svg"
            alt="arrow-down"
            width={16.64}
            height={16.64}
          />
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Outer Circle */}
        <motion.div
          className="absolute w-[390px] sm:w-[640px] h-[390px] sm:h-[640px] md:w-[850px] md:h-[850px] border border-[#ffffff30] rounded-full flex items-center justify-center"
          animate={circlePath}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {outerLogos.map((logo, index) => (
            <div
              key={`outer-${index}`}
              className="absolute md:w-12 sm:w-10 w-8 md:h-12 sm:h-10 h-8"
              style={{
                transform: `rotate(${
                  (index * 360) / outerLogos.length
                }deg) translateY(${isLarge ? -430 : isMedium ? -322 : -195}px)`,
              }}
            >
              <img
                src={logo}
                alt={`Outer Logo ${index + 1}`}
                width={78}
                height={78}
              />
            </div>
          ))}
        </motion.div>

        {/* Middle Circle */}
        <motion.div
          className="absolute w-[320px] h-[320px] sm:w-[530px] md:w-[720px] sm:h-[530px] md:h-[720px] border border-[#ffffff30] rounded-full flex items-center justify-center"
          animate={circlePath}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {middleLogos.map((logo, index) => (
            <div
              key={`middle-${index}`}
              className="absolute md:w-12 sm:w-10 w-8 md:h-12 sm:h-10 h-8"
              style={{
                transform: `rotate(${
                  (index * 360) / middleLogos.length
                }deg) translateY(${isLarge ? -360 : isMedium ? -265 : -160}px)`,
              }}
            >
              <img
                src={logo}
                alt={`Middle Logo ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </motion.div>

        {/* Inner Circle */}
        <motion.div
          className="absolute w-[250px] h-[250px] sm:w-[400px] md:w-[600px] sm:h-[400px] md:h-[600px] border border-[#ffffff30] rounded-full flex items-center justify-center"
          animate={circlePath}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {innerLogos.map((logo, index) => (
            <div
              key={`inner-${index}`}
              className="absolute md:w-12 sm:w-10 w-8 md:h-12 sm:h-10 h-8"
              style={{
                transform: `rotate(${
                  (index * 360) / innerLogos.length
                }deg) translateY(${isLarge ? -300 : isMedium ? -200 : -125}px)`,
              }}
            >
              <img
                src={logo}
                alt={`Inner Logo ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OrbitingCircles;
