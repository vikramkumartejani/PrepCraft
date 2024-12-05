"use client";
import AiTutor from "@/components/AiTutor";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetTouch from "@/components/GetTouch";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <AiTutor/>
      <Reviews/>
      <FAQ/>
      <GetTouch/>
      <Footer/>
    </div>
  );
}
