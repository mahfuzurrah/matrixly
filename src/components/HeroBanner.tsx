"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function HeroBanner() {
  const words = [
    {
      text: "Unlock",
    },
    {
      text: "the",
    },
    {
      text: "power",
    },
    {
      text: "of",
    },
    {
      text: "AI",
      className: "text-primary dark:text-blue-500",
    },
    {
      text: "with",
      className: "text-primary dark:text-blue-500",
    },
    {
      text: "Matrixly.",
      className: "text-primary dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-[url('/img/Hero.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <TypewriterEffect words={words} />
          <p className="text-desc text-base text-center mt-3">
            Matrixly empowers users to engage in AI conversations, analyze
            documents for valuable insights, and effortlessly create shareable
            chatbots accessible through QR codes.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-5 text-center">
            <button className="px-8 py-4 bg-sec text-white border border-black text-sm  rounded-xl">
              Start free with email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
