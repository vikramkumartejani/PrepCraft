import Image from "next/image";
import React from "react";

const GetTouch = () => {
  return (
    <div className="bg-[#071125] w-full h-full lg:pb-[148px] pb-[50px]">
      <div className=" w-full h-full text-center text-white relative lg:pt-[250px] pt-[50px]">
        <div className="absolute inset-0 z-20">
          <img
            src="/assets/get-in-touch-circle.png"
            alt="image"
            className="w-full h-full object-contain "
          />
        </div>

        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-center relative z-30">
          <div
            className="max-w-[1240px] py-[95px] text-center w-full m-auto border border-[#FFFFFF1F] rounded-[25px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 100%)",
            }}
          >
            <Image
              src="/assets/elements.svg"
              alt="elements"
              width={206}
              height={206}
              className=" absolute top-0 left-0"
            />
            <Image
              src="/assets/bottom-elements.svg"
              alt="elements"
              width={206}
              height={206}
              className=" absolute bottom-0 right-0"
            />
            <div className="md:px-8 px-4">
              <h1 className="text-white text-[30px] md:text-[48px] md:leading-[60px] leading-[35px] font-semibold">
                Get In Touch with Us
              </h1>
              <p className="text-[15px] md:text-[16px] md:leading-[24.64px] font-normal text-white mt-4 max-w-[917px] mx-auto">
                We’re here to support your child’s educational journey. Whether
                you have questions about our AI-powered practice exams,
                educational games, or want to learn more about PrepCraft, feel
                free to contact us.
              </p>
              <div className="mt-[51px] flex items-center justify-center gap-4">
                <button className="border-[1.5px] border-[#3B6EFF] w-[175px] h-[56px] rounded-[18px] text-white text-[16px] leading-[24px] font-semibold tracking-[-0.03em]">
                  Contact Us!
                </button>
                <button
                  style={{
                    background:
                      "linear-gradient(28.63deg, #3B6EFF 10.71%, #3DAEFF 86.11%)",
                  }}
                  className="w-[178px] h-[56px] rounded-[18px] text-white text-[16px] leading-[24px] font-semibold tracking-[-0.03em]"
                >
                  Start Free Trial
                </button>
              </div>
              <div className="mt-[51px] flex flex-wrap items-center justify-center gap-[30px]">
                <div className="flex items-center md:gap-4 gap-2">
                  <img
                    src="/assets/correct.svg"
                    alt="correct"
                    width={24}
                    height={24}
                    className="md:w-[24px] w-[20px]"
                  />
                  <h2 className="text-[#CDD5DF] text-[15px] md:text-[16px] md:leading-[24px] font-normal tracking-[-0.01em] mt-0.5">
                    Free 15 days trial
                  </h2>
                </div>
                <div className="flex items-center md:gap-4 gap-2">
                  <img
                    src="/assets/correct.svg"
                    alt="correct"
                    width={24}
                    height={24}
                    className="md:w-[24px] w-[20px]"
                  />
                  <h2 className="text-[#CDD5DF] text-[15px] md:text-[16px] md:leading-[24px] font-normal tracking-[-0.01em] mt-0.5">
                    No credit card required
                  </h2>
                </div>
                <div className="flex items-center md:gap-4 gap-2">
                  <img
                    src="/assets/correct.svg"
                    alt="correct"
                    width={24}
                    height={24}
                    className="md:w-[24px] w-[20px]"
                  />
                  <h2 className="text-[#CDD5DF] text-[15px] md:text-[16px] md:leading-[24px] font-normal tracking-[-0.01em] mt-0.5">
                    Support 24/7
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
