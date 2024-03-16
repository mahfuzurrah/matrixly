"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="w-[100%]">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Leverage the Wisdom of Multiple AI Systems:",
    description:
      "Don't settle for a single perspective. With Matrixly, you can access information from various large language models (LLMs), allowing you to compare and choose the response that best aligns with your specific context.",
    link: "#",
  },
  {
    title: "Build your Knowledge Library:",
    description:
      "Create a personal library of analyzed documents for future reference. Gain valuable insights from past analyses and leverage them to make informed decisions in the future.",
    link: "#",
  },
  {
    title: "Document Analysis on Demand:",
    description:
      "Upload, preview, and ask in-depth questions about your documents. Matrixly analyzes your uploaded documents (one at a time) to provide insights and answer your queries. Don't worry, your documents are never stored – they are deleted as soon as you upload another one, ensuring complete privacy.",
    link: "#",
  },
  {
    title: "Captivate your Audience with Sharebot:",
    description:
      "Eliminate information gaps and elevate your presentations with Sharebot, a QR-code accessible chatbot.  This interactive tool provides access to additional details, answers lingering questions, and allows attendees to save information for future reference. Sharebot streamlines the presentation experience, benefiting both presenters and audiences for maximized learning and engagement.",
    link: "#",
  },
  {
    title: "QR Codes Reimagined:",
    description:
      "Go beyond simple scans. Create sharebots accessible through QR codes, extending the reach and impact of your content. Use them for various purposes, including personal profiles, business presentations, website Q&A sections, and more, unlocking new possibilities for communication.",
    link: "#",
  },
  {
    title: "Discover a World of Possibilities:",
    description:
      "Matrixly's potential extends far beyond these core features. Explore its capabilities and unlock new ways to streamline your workflow, enhance communication, and gain valuable insights from your content.",
    link: "#",
  },
];
