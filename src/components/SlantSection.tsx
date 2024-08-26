import { fadeInVariants } from "@/utils/motion";
import MotionComponent from "./MotionComponent";
import { firs_regular } from "@/utils/font";

const SlantSection = () => {
  return (
    <div className={` ${firs_regular.className}`}>
      <div className="text-white text-[0.6rem] lg:text-[1rem] w-full bg-[#7BECABC7] absolute -rotate-6 flex gap-x-2 lg:gap-x-20 py-2 lg:py-4 items-center justify-center">
        <p>Affordable Payment Plans</p>
        <div className="bg-white w-1 h-1 rounded-full"></div>
        <p>Accessible Solar Energy</p>
        <div className="bg-white w-1 h-1 rounded-full"></div>
        <p>Flexible Payment Plans</p>
      </div>
      <div className="text-white text-[0.6rem] lg:text-[1rem] w-full  bg-[#074942] relative rotate-6 flex gap-x-2 lg:gap-x-20 py-2 lg:py-4 items-center justify-center">
        <p>Flexible Payment Plans</p>
        <div className="bg-white w-1 h-1 rounded-full"></div>
        <p>Accessible Solar Energy</p>
        <div className="bg-white w-1 h-1 rounded-full"></div>
        <p>Affordable Payment Plans</p>
      </div>
    </div>
  );
};

export default SlantSection;
