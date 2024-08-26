import Image from "next/image";
import Batteries from "./Batteries";
import sunIcon from "@/assets/icons/sunIcon.svg";
import SolarPanel from "./SolarPanel";
import Inverter from "./Inverter";
import frame from "@/assets/icons/Frame.svg";
import { balgin_bold, firs_regular } from "@/utils/font";

const Products = () => {
  return (
    <section className="bg-[#7BECAB2E] pt-0 pb-12 lg:py-12">
      <Image
        className="w-20 h-20 lg:w-28 lg:h-28"
        src={sunIcon}
        alt=""
        width={0}
        height={0}
      />
      <div className="text-center space-y-4 -mt-12 lg:-mt-20">
        <h1 className={` ${balgin_bold.className} text-[#074942] text-2xl`}>
          Get Started
        </h1>
        <p className={`px-4 leading-[25px] ${firs_regular.className} `}>
          Want to get solar? Speak to our experts and let us recommend the best
          plan that works for you.
        </p>
      </div>
      <div className="space-y-12 px-4 lg:px-12 mt-4 lg:mt-20">
        <SolarPanel />
        <Inverter />
        <Batteries />
      </div>
      <div className="w-full absolute">
        <Image className="ml-auto" src={frame} alt="" />
      </div>
    </section>
  );
};

export default Products;
