"use client";
import H1 from "@/common/component/element/H1";
import React from "react";
import dynamic from "next/dynamic";
import HeroText from "@/common/component/element/HeroText";
import Image from "@/common/component/element/Image";
import { RiArrowRightLine } from "react-icons/ri";
import Ratings from "./components/Ratings";
import SliderTechLeader from "./components/SliderTechLeader";

const FusionApp = dynamic(() => import("./components/FusionApp"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-start px-5 lg:px-10  w-full mt-20 overflow-hidden ">
      <div className="w-full gap-5 flex lg:flex-row flex-col justify-center mt-5">
        <div className="w-full  z-[9] flex-col py-5 h-auto flex bg-[#E8E8E8] rounded-2xl px-5">
          <div className="w-full flex justify-start  ">
            <div className="bg-[#BBBFCA] rounded-full px-1 py-1 flex gap-1 items-center">
              <div className="bg-[#E8E8E8] rounded-full px-2">
                <h1>New</h1>
              </div>
              <h1 className="">Download the new app</h1>
              <div className="pr-3">
                <RiArrowRightLine size={20} className="" />
              </div>
            </div>
          </div>
          <div className="w-full mt-5 ">
            <HeroText
              texts="Take Charge of Your Finances and Shape a Radiant Future with our NFT Offer."
              className="  leading-[0.95em] "
            />
          </div>
          <H1
            delay={0.2}
            className="mt-5 w-full lg:!w-[80%] justify-start !text-lg text-start"
            title="We've heard that exceeding our customers' expectations is beyond reach. Instead of reinventing the wheel, we've chosen to enhance it."
            textColor="normal"
          />
          <div className="w-full relative gap-5 flex justify-start items-center">
            <div className=" relative">
            <Image
                className="w-[150px] h-auto "
                src="/google-play.svg"
                alt="Fusion"
                height={200}
                width={200}
                priority
              />
            </div>
            <div className=" relative">
            <Image
                className="w-[150px] h-auto "
                src="/app-store.svg"
                alt="Fusion"
                height={200}
                width={200}
                priority
              />
            </div>
          </div>  
          <div className="w-full">
            <Ratings />
          </div>  
        </div>

        <div className="basis-[70%] flex w-full relative  justify-center items-center">
          <div className="w-full  h-[600px] overflow-hidden px-5 py-5 relative rounded-2xl">
            <FusionApp />
            <div className="absolute inset-0 w-full z-[-9]">
              <Image
                className="w-full h-[600px] "
                src="https://images.unsplash.com/photo-1677336322384-2c62ab23c875?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:mt-10">
        <SliderTechLeader />
      </div>

    </div>
  );
}
