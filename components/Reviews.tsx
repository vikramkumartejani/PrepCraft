import Image from "next/image";
import { Star } from "lucide-react";
import React from "react";

interface Review {
  id: number;
  rating: number;
  text: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "Musicly is the best place to rent a variety of musical instruments. Absolutely love it! You should try it too.",
    author: {
      name: "Roman Nifty",
      title: "Musician",
      avatar: "/assets/avatar.svg",
    },
  },
  {
    id: 2,
    rating: 5,
    text: "Musicly is the best place to rent a variety of musical instruments. Absolutely love it! You should try it too.",
    author: {
      name: "Roman Nifty",
      title: "Musician",
      avatar: "/assets/avatar.svg",
    },
  },
  {
    id: 3,
    rating: 5,
    text: "Musicly is the best place to rent a variety of musical instruments. Absolutely love it! You should try it too.",
    author: {
      name: "Roman Nifty",
      title: "Musician",
      avatar: "/assets/avatar.svg",
    },
  },
];

const Reviews = () => {
  return (
    <div
      className="w-full bg-[#071125] pt-[50px] md:pt-[109px] pb-[32px] md:px-8 px-4"
      style={{
        backgroundImage: "url('/assets/reviews-bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className="w-full max-w-[1184px] mx-auto">
        <div>
          <div className="bg-[#080916] rounded-[1000px] flex items-center justify-center gap-1 h-[30px] w-full max-w-[100px] mx-auto">
            <h2 className="text-[#F8FAFB] text-[14px] font-normal">Reviews</h2>
            <Image
              src="/assets/review.svg"
              alt="reviews"
              width={16}
              height={16}
            />
          </div>
          <h2 className="text-[#FFFFFF] text-[26px] md:text-[48px] font-normal text-center my-4 md:my-7">
            What our Client is Saying
          </h2>
          <div className="max-w-[400px] mx-auto flex items-center flex-wrap justify-center relative z-[2]">
            <h1 className="text-white font-extrabold tracking-[1px] text-base mr-3">
              GOOGLE
            </h1>
            <h2 className="text-white text-base tracking-[1px] font-normal">
              4.9
            </h2>
            <Image
              src="/assets/rating.svg"
              alt="rating"
              width={82}
              height={14.14}
              className="ml-2 mr-[18px] -mt-0.5"
            />
            <p className="text-white text-[15px] leading-[15px] tracking-[1px] font-normal">
              Based on 28 reviews
            </p>
          </div>

          <div className="relative mt-[52px] z-[1]">
            <Image
              src="/assets/cube.png"
              alt="cube"
              width={200.72}
              height={186.07}
              className="absolute top-[-100px] xl:right-[-120px] right-[-40px] z-1"
            />
            <div className="p-[1px] rounded-[24px] bg-gradient-to-br from-[#3DECFF] to-[#3B6EFF] z-[30] relative">
              <div className="rounded-[24px] bg-[#080916]">
                <div className="p-3.5 md:p-5 bg-[#071125] rounded-[24px]">
                  <div className="grid gap-4 md:gap-6 relative z-50 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                      <div
                        key={review.id}
                        className={`w-auto min-w-[220px] relative bg-[#080916B5] p-5 py-6 md:p-10 rounded-xl h-full z-50 ${
                          reviews.length % 2 === 1 &&
                          index === reviews.length - 1
                            ? "md:col-span-2 lg:col-span-1"
                            : ""
                        }`}
                      >
                        <div className="flex gap-1 mb-5 md:mb-[30px]">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-[#2D91FD] stroke-none"
                            />
                          ))}
                        </div>

                        <p className="text-[#A5AAC6] text-sm sm:text-base font-normal leading-[26.24px] mb-6 md:mb-10">
                          {review.text}
                        </p>

                        <div className="flex items-center gap-4">
                          <Image
                            src={review.author.avatar}
                            alt="avatar"
                            width={55}
                            height={55}
                            className="md:w-[55px] md:h-[55px] w-[40px] h-[40px]"
                          />
                          <div>
                            <h4 className="text-base md:text-lg leading-[27px] font-normal text-white">
                              {review.author.name}
                            </h4>
                            <p className="text-sm text-[#A5AAC6] leading-[21px] font-medium md:mt-1.5">
                              {review.author.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-[52px] w-[200px] mx-auto rounded-[90px] bg-[#3D79FB] h-[50px] md:h-[65px] flex items-center gap-3">
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
    </div>
  );
};

export default Reviews;
