import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OrbitingCircles: React.FC = () => {
    const circlePath = {
        rotate: 360,
    };

    return (
        <div className=" flex items-center justify-center mt-[200px] md:mt-[500px] ">
            {/* Central Title */}
            <div className=" absolute z-20 max-w-[775px] mx-auto w-full text-center">
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
                    className="text-[25px] md:text-[52px] md:leading-[70.72px] font-bold uppercase"
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
                    className="my-4 md:my-8 w-[190px] md:w-[250px] max-w-full mx-auto rounded-[90px] h-[40px] md:h-[65px] flex items-center gap-3"
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
                        className="text-[#FFFFFFA3] font-medium text-[17px] leading-[16.74px]"
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

            {/* Orbiting Logos */}
            <div className="relative flex items-center justify-center">
                {/* Outer Orbit */}
                <motion.div
                    className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] border border-[#ffffff30] rounded-full flex items-center justify-center"
                    animate={circlePath}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "linear",
                    }}
                >
                    {/* Image 1 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(0deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/creativity.svg"
                            alt="Google Drive"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 2 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(60deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/ai-brain-two.svg"
                            alt="AI Brain"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 3 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(120deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/creativity2.svg"
                            alt="Creativity"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 4 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(180deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/computer-engineer.svg"
                            alt="Computer Engineer"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 5 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(240deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/learning.svg"
                            alt="Learning"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 6 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(300deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/board-game.svg"
                            alt="Board Game"
                            className="w-full h-full"
                        />
                    </div>
                </motion.div>

                {/* Middle Orbit */}
                <motion.div
                    className="absolute w-[300px] md:w-[700px] h-[300px] md:h-[700px] border border-[#ffffff30] rounded-full flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "linear",
                    }}
                >
                    {/* Image 1 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(0deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/creativity.svg"
                            alt="WhatsApp"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 2 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(60deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/ai-brain-two.svg"
                            alt="AI Brain"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 3 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(120deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/creativity2.svg"
                            alt="Creativity"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 4 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(180deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/computer-engineer.svg"
                            alt="Computer Engineer"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 5 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(240deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/learning.svg"
                            alt="Learning"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 6 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(300deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/board-game.svg"
                            alt="Board Game"
                            className="w-full h-full"
                        />
                    </div>
                </motion.div>

                {/* Inner Orbit */}
                <motion.div
                    className="absolute w-[250px] md:w-[600px] h-[250px] md:h-[600px] border border-[#ffffff30] rounded-full flex items-center justify-center"
                    animate={circlePath}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    }}
                >
                    {/* Image 1 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(0deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/creativity.svg"
                            alt="Notion"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 2 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(60deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/ai-brain-two.svg"
                            alt="AI Brain"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 3 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(120deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/creativity2.svg"
                            alt="Creativity"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 4 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(180deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/computer-engineer.svg"
                            alt="Computer Engineer"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 5 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(240deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/learning.svg"
                            alt="Learning"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Image 6 */}
                    <div
                        className="absolute w-10 h-10"
                        style={{ transform: "rotate(300deg) translateY(-350px)" }}
                    >
                        <img
                            src="/assets/board-game.svg"
                            alt="Board Game"
                            className="w-full h-full"
                        />
                    </div>
                </motion.div>
            </div>


        </div>
    );
};

export default OrbitingCircles;
