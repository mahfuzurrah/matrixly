"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { IoCheckmarkCircle } from "react-icons/io5";

export function TextRevealCardPreview() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TextRevealCard
        text="Use and Share information efficiently"
        revealText="Use and Share information efficiently"
      >
        <TextRevealCardTitle>Get started - It’s free</TextRevealCardTitle>
      </TextRevealCard>
      <div className="flex gap-3 items-center justify-center mt-5">
        <p className="flex gap-2 items-center text-desc">
          <IoCheckmarkCircle className="text-[#55B59E]" /> No credit card
          required
        </p>
        <p className="flex gap-2 items-center text-desc">
          <IoCheckmarkCircle className="text-[#55B59E]" /> Free Plan
        </p>
        <p className="flex gap-2 items-center text-desc">
          <IoCheckmarkCircle className="text-[#55B59E]" /> Cancel anytime
        </p>
      </div>
    </div>
  );
}
