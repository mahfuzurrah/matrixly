"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
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
      className: "text-white dark:text-blue-500",
    },
    {
      text: "with",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "Matrixly",
      className: "text-white dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]  ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-white dark:text-white text-center text-xs sm:text-base mb-5 w-[850px]">
        Matrixly empowers users to engage in AI conversations, analyze documents
        for valuable insights, and effortlessly create shareable chatbots
        accessible through QR codes.
      </p>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
          Start free with email
        </span>
      </button>
    </div>
  );
}
