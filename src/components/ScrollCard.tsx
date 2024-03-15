"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "AI Chat",
    description:
      "Discover insightful conversations with our advanced AI chatbot. Our free plan offers unlimited hourly chats - ask away!",
    content: <div className="h-full w-full bg-[url('/img/one_img.png')] bg-cover bg-center bg-no-repeat"></div>,
  },
  {
    title: "Document Analysis",
    description:
      "Upload lengthy documents and let Matrixly provide you with quick and accurate summaries, enhancing your efficiency.",
    content: <div className="h-full w-full bg-[url('/img/2nd_img.png')] bg-cover bg-center bg-no-repeat"></div>,
  },
  {
    title: "Shareable Chatbots (Sharebots)",
    description:
      "Easily turn documents into interactive chatbots for dynamic communication. Share your chatbots seamlessly using QR codes, enabling others to access and engage with the content instantly.",
    content: <div className="h-full w-full bg-[url('/img/Img.png')] bg-cover bg-center bg-no-repeat"></div>,
  },
];
export function ScrollCard() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
