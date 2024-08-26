import { fadeInVariants } from "@/utils/motion";
import MotionComponent from "./MotionComponent";
import { firs_regular } from "@/utils/font";

const SlantSection = () => {
  return (
    <div className={` ${firs_regular.className}`}>
      <div className="text-white text-[0.7rem] lg:text-[1rem] w-full bg-[#7BECABC7] absolute -rotate-6 flex gap-x-2 lg:gap-x-20 py-2 lg:py-4 items-center lg:justify-center">
        <MotionComponent as="p" variants={fadeInVariants("left", 0.2, 0.5)}>
          Affordable Payment Plans
        </MotionComponent>
        <div className="bg-white w-1 h-1 rounded-full"></div>
        <MotionComponent as="p" variants={fadeInVariants("left", 0.2, 0.5)}>
          Accessible Solar Energy
        </MotionComponent>
        <div className="bg-white w-1 h-1 rounded-full"></div>
        <MotionComponent as="p" variants={fadeInVariants("right", 0.2, 0.5)}>
          Flexible Payment Plans
        </MotionComponent>
      </div>
      <div className="text-white text-[0.7rem] lg:text-[1rem] w-full  bg-[#074942] relative rotate-6 flex gap-x-2 lg:gap-x-20 py-2 lg:py-4 items-center lg:justify-center">
        <MotionComponent as="p" variants={fadeInVariants("right", 0.1, 0.5)}>
          Flexible Payment Plans
        </MotionComponent>
        <div className="bg-white w-1 h-1 rounded-full"></div>
        <MotionComponent as="p" variants={fadeInVariants("right", 0.1, 0.5)}>
          Accessible Solar Energy
        </MotionComponent>
        <div className="bg-white w-1 h-1 rounded-full"></div>
        <MotionComponent as="p" variants={fadeInVariants("right", 0.1, 0.5)}>
          Affordable Payment Plans
        </MotionComponent>
      </div>
    </div>
  );
};

export default SlantSection;
