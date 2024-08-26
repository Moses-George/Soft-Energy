import Image from "next/image";
import stringIcon from "@/assets/icons/stringIcon.svg";
import trippleDots from "@/assets/icons/trippleDots.svg";
import celebrationIcon from "@/assets/icons/celebrationIcon.svg";
import MotionComponent from "@/components/MotionComponent";
import { fadeInVariants } from "@/utils/motion";
import { balgin_regular } from "@/utils/font";

const ComingSoon = () => {
  return (
    <section>
      <div>
        <div className="flex justify-center gap-x-40 lg:gap-x-20">
          <MotionComponent as="div" variants={fadeInVariants("down", 0.1, 0.5)}>
            <Image
              className="h-28 lg:h-60"
              src={stringIcon}
              alt=""
              height={0}
            />
          </MotionComponent>
          <MotionComponent as="div" variants={fadeInVariants("down", 0.3, 0.5)}>
            <Image
              className="h-28 lg:h-60"
              src={stringIcon}
              alt=""
              height={0}
            />
          </MotionComponent>
        </div>
        <div className="bg-[#074942] pt-6 lg:pt-8 w-[80%] lg:w-96 mx-auto">
          <h1
            className={`text-xl text-white text-center my-auto ${balgin_regular.className} `}
          >
            Online Store: Coming Soon
          </h1>
          <div className="flex justify-between">
            <Image src={trippleDots} alt="" width={30} />
            <Image
              className="rotate-[270deg]"
              src={trippleDots}
              alt=""
              width={30}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-16 lg:pt-0">
        <Image
          className="w-16 lg:w-32"
          src={celebrationIcon}
          alt=""
          width={0}
        />
        <Image
          className="w-16 lg:w-32 rotate-[270deg]"
          src={celebrationIcon}
          alt=""
          width={0}
        />
      </div>
    </section>
  );
};

export default ComingSoon;
