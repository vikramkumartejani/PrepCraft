import Image from "next/image";
import React from "react";

const AiTutor = () => {
    return (
        <div
            className="bg-[#071125] w-full flex flex-col items-center justify-center overflow-hidden relative py-[57px]"
            style={{
                backgroundImage: "url('/assets/ai-tutor.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Sides image */}
            <div className="absolute top-0 right-0">
                <Image
                    src="/assets/right-dots.svg"
                    alt="right-dots"
                    width={100}
                    height={100}
                />
            </div>
            <div className="absolute top-0 left-0">
                <Image
                    src="/assets/left-dots.svg"
                    alt="right-dots"
                    width={100}
                    height={100}
                />
            </div>

            {/* Content */}
            <div className="max-w-[1180px] w-full mx-auto flex flex-col items-center justify-center space-y-4">
                <div className="bg-[#080916] rounded-[1000px] flex items-center justify-center gap-1 h-[30px] w-full max-w-[100px] mx-auto">
                    <h2 className="text-[#F8FAFB] text-sm font-normal">AI Tutor</h2>
                    <Image
                        src="/assets/ai-brain.svg"
                        alt="ai-brain"
                        width={16}
                        height={16}
                    />
                </div>
                <h2 className="text-[#FFFFFF] text-[26px] md:text-[48px] leading-[60px] font-medium text-center py-4 max-w-[1050px]">
                    A Patient AI Tutor and Educational Games for Every Child
                </h2>
                <p className="text-[#D8DCED] text-[16px] leading-[24.8px] font-normal text-center">
                    At PrepCraft, we make learning both effective and enjoyable. Our
                    AI-driven platform offers practice exams tailored to your child&apos;s
                    learning style, providing age-appropriate explanations for challenging
                    concepts. Plus, with our suite of educational games—including Wordle,
                    Spelling Bee, Chess, and Crosswords—your child can have fun while
                    developing critical thinking and problem-solving skills.
                </p>

                {/* Boxes */}
                <div className="py-[53px] grid grid-cols-3 gap-5">
                    <div className="relative w-full p-[1.5px] rounded-[24px] rounded-se-[80px] custom-bor bg-gradient-to-b from-[#3190FFD9] to-[#3190FF]/0">
                        {/* Corner Accent */}
                        <div className="absolute right-1.5 top-1.5">
                            <Image
                                src="/assets/corner.svg"
                                alt="corner"
                                width={60}
                                height={50}
                            />
                        </div>

                        {/* Content Box */}
                        <div className="relative bg-[#071125] rounded-[24px] rounded-se-[80px] px-8 py-10 text-white">

                            <div className="mb-[28px] w-[269px] h-[2px] opacity-70" style={{background:"linear-gradient(90deg, rgba(255, 255, 255, 0) 24.6%, #FFFFFF 53.13%, rgba(255, 255, 255, 0) 81.6%)"}}></div>

                            {/* Rocket Icon */}
                            <div className="mb-5">
                                <Image
                                    src="/assets/rocket.svg"
                                    alt="rocket"
                                    width={78}
                                    height={78}
                                />
                            </div>

                            {/* Text Content */}
                            <h2 className="text-[#FFFFFF] text-[20px] leading-[30px] font-medium">
                                AI-Powered Learning
                            </h2>

                            <div className="w-[25px] h-[1px] bg-[#FFFFFF4D] my-5"></div>

                            <p className="text-[#A5AAC6] text-[16px] leading-[26px] font-normal">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industrys...
                            </p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <button className=" w-[200px] mx-auto rounded-[90px] bg-[#3D79FB] h-[50px] md:h-[65px] flex items-center gap-3">
                    <Image
                        src="/assets/btn-arrow.svg"
                        alt="btn-arrow"
                        width={45}
                        height={45}
                        className="ml-2.5 lg:h-[45px] md:w-[45px] w-[35px] h-[35px]"
                    />
                    <h2 className="text-[#F8FAFB] font-semibold text-base md:text-lg leading-[27px]">
                        Get Started
                    </h2>
                </button>
            </div>
        </div>
    );
};

export default AiTutor;
