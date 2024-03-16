"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 fixed top-0 z-[-99] flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
    </div>
  );
}
