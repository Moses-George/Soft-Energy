import { fadeInVariants } from "@/utils/motion";
import MotionComponent from "./MotionComponent";
import { firs_regular } from "@/utils/font";
import  deepGreenFrame from "@/assets/images/deepGreenFrame.png";
import  lightGreenFrame from "@/assets/images/lightGreenFrame.png";
import Image from "next/image";

const SlantSection = () => {
  return (
    // <div>
    //   <Image className="w-full absolute h-60" src={lightGreenFrame} alt="" />
    //   <Image className="w-full absolute h-52" src={deepGreenFrame} alt="" />
    // </div>
    <div className={` ${firs_regular.className}`}>
      <div className="w-[120%] -ml-40 overflow-x-hidden pl-2 text-white text-[0.5rem] lg:text-[1rem] w-full bg-[#7BECABC7] absolute -rotate-6 flex gap-x-2 lg:gap-x-20 py-3 lg:py-6 items-center justify-center">
        <p>Affordable Payment Plans</p>
        <div className="bg-white w-2 h-2 rounded-full"></div>
        <p>Accessible Solar Energy</p>
        <div className="bg-white w-2 h-2 rounded-full"></div>
        <p>Flexible Payment Plans</p>
      </div>
      <div className="w-[120%] -ml-40 overflow-x-hidden pl-2 text-white text-[0.5rem] lg:text-[1rem] w-full  bg-[#074942] absolute lg:relative rotate-6 flex gap-x-2 lg:gap-x-20 py-2 lg:py-5 items-center justify-center">
        <p>Flexible Payment Plans</p>
        <div className="bg-white w-2 h-2 rounded-full"></div>
        <p>Accessible Solar Energy</p>
        <div className="bg-white w-2 h-2 rounded-full"></div>
        <p>Affordable Payment Plans</p>
      </div>
    </div>
  );
};

export default SlantSection;
