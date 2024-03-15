import { CardHoverEffect } from "@/components/CardHoverEffect";
import { HeroBanner } from "@/components/HeroBanner";
import { ScrollCard } from "@/components/ScrollCard";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <section className=" w-[100%] h-[100%] py-[80px]">
        <div className="container">
          <div>
            <h2 className="text-h2 font-bold">
              Stay ahead on gaining and sharing information using following
              Matrixly tools:
            </h2>
          </div>
          <ScrollCard />
        </div>
      </section>
      <section className=" w-[100%] h-[100%] py-[80px] bg-[url('/img/card_bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div>
            <h2 className="text-h2 font-bold">
              Empower Your Documents and Insights: All-in-One Platform for
              Efficiency and Impact
            </h2>
          </div>
          <CardHoverEffect />
        </div>
      </section>
      <section className=" w-[100%] h-[100%] py-[80px]">
        <div className="container">
          <div className="flex flex-col justify-center p-10 bg-[#E9E7FF] rounded-xl">
            <h2 className="text-h2 text-title text-center font-bold">
              Use and Share information efficiently
            </h2>
            <p className="text-base text-desc text-center mt-1">
              Get started - It’s free
            </p>
            <button className="w-max m-auto mt-5 px-8 py-4 bg-primary  text-white text-sm  rounded-xl">
            Try it out
            </button>
            <div className="flex gap-3 items-center justify-center mt-8">
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
        </div>
      </section>
    </>
  );
}
