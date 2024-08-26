import Image from "next/image";
import dynamite from "@/assets/icons/dddynamite (2).svg";
import logo1 from "@/assets/images/SoftKYC Logo 1 1.png";
import logo2 from "@/assets/images/Logo-W 1.png";
import frame from "@/assets/icons/Frame.svg";
import MotionComponent from "./MotionComponent";
import { fadeInVariants } from "@/utils/motion";
import { balgin_medium, balgin_regular, firs_regular } from "@/utils/font";

const OurPartners = () => {
  return (
    <section className="bg-[#074942E5] opacity-9">
      <Image
        className="absolute"
        src={dynamite}
        alt=""
        width={60}
        height={60}
      />
      <MotionComponent
        as="h1"
        variants={fadeInVariants("down", 0.1, 0.5)}
        className={`text-white pt-4 text-xl lg:text-3xl text-center ${balgin_medium.className} `}
      >
        Our Partners
      </MotionComponent>
      <div className="lg:flex gap-x-16 lg:justify-between max-w-[90%] space-y-6 lg:space-y-0 mx-auto pt-12 pb-8 px-3 lg:px-10">
        <MotionComponent
          as="div"
          variants={fadeInVariants("right", 0.2, 0.5)}
          className="flex gap-x-4"
        >
          <Image className="h-16 w-40 lg:w-24" src={logo1} alt="" width={0} height={0} />
          <div className="space-y-1">
            <h1
              className={`bg-gradient-to-r from-[#7BECAB] via-white to-white bg-clip-text text-transparent text-xl ${balgin_medium.className} `}
            >
              J Tech
            </h1>
            <p
              className={`text-white leadin-relaxed text-sm ${firs_regular.className} font-light max-w-md`}
            >
              A leading solar energy company supporting our installations with
              cutting-edge products.
            </p>
          </div>
        </MotionComponent>
        <MotionComponent
          as="div"
          variants={fadeInVariants("right", 0.1, 0.5)}
          className="flex gap-x-4"
        >
          <Image className="h-16 w-40 lg:w-24" src={logo2} alt="" width={0} height={0} />
          <div className="space-y-1">
            <h1
              className={`text-xl bg-gradient-to-r from-[#7BECAB] via-white to-white bg-clip-text text-transparent ${balgin_medium.className} `}
            >
              Green Kapital
            </h1>
            <p
              className={`text-white text-relaxed text-sm ${firs_regular.className} max-w-md`}
            >
              A solar energy production company partnering with us to offer
              affordable payment plans to our customers.
            </p>
          </div>
        </MotionComponent>
      </div>
      <div className="w-full">
        <Image className="ml-auto" src={frame} alt="" />
      </div>
    </section>
  );
};

export default OurPartners;
