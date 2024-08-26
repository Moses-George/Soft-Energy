"use client";

import Image from "next/image";
import HeroBg from "@/assets/images/HeroBg.png";
import { useRouter } from "next/navigation";
import MotionComponent from "./MotionComponent";
import { fadeInVariants, textVariants } from "@/utils/motion";
import { balgin_bold, firs_regular } from "@/utils/font";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="grid grid-cols-[1fr] lg:grid-cols-[5fr_5fr] justify-items-center mx-auto gap-x-12 px-4 lg:px-10 py-8 lg:py-28">
      <div className="space-y-6 pb-8 lg:pb-0">
        <MotionComponent
          as="h1"
          variants={fadeInVariants("down", 0.1, 0.5)}
          className={`text-[#074942] font-[900] text-3xl lg:text-5xl leading-[40px] text-center lg:text-start lg:leading-[70px] ${balgin_bold.className}`}
        >
          Empower your World with Soft Energy
        </MotionComponent>
        <MotionComponent
          as="p"
          variants={textVariants}
          className={`font-[400] text-center lg:text-start leading-[30px] ${firs_regular.className}`}
        >
          Affordable Solar Energy Solutions for Homes, Businesses, and
          Organizations
        </MotionComponent>
        <div className={` ${firs_regular.className} w-full grid`}>
          <div
            className="mx-auto lg:mx-0"
            onClick={() => router.push("/get-started")}
          >
            <button className="absolute b-0 py-2 text-white px-6 bg-[#074942] rounded-md transform active:scale-75 transition-transform">
              Get Started
            </button>
            <button className="ml-1 b-0 py-[22px] px-16 bg-[#07494238] opacity-[22] rounded-md" />
          </div>
        </div>
        <MotionComponent
          as="p"
          variants={textVariants}
          className={`relative text-center lg:text-start text-sm lg:text-md ${firs_regular.className}`}
        >
          Get started today with Flexible Payment Options!
        </MotionComponent>
      </div>
      <div className="mx-aut lg:justify-self-end">
        <Image
          className="w-[20rem] h-48 lg:w-[43rem] lg:h-[27rem]"
          src={HeroBg}
          alt=""
          width={0}
          height={0}
        />
      </div>
    </section>
  );
};

export default HeroSection;
