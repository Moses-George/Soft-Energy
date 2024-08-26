import greenArrow from "@/assets/icons/greenArrow.svg";
import Image from "next/image";
import whoweareImg from "@/assets/images/whoweareImg.png";
import whoweareBg from "@/assets/images/whoweareBg.png";
import yellowStar from "@/assets/icons/yellowStar.svg";
import MotionComponent from "./MotionComponent";
import { fadeInVariants, textVariants, zoomInVariants } from "@/utils/motion";
import { balgin_bold, balgin_medium, firs_medium, firs_regular } from "@/utils/font";

const data = [
  {
    header: "Individuals:",
    text: "Dual-income earners, bank workers, teachers, civil servants, and remote workers.",
    icon: greenArrow,
  },
  {
    header: "Businesses:",
    text: "From corner shops to large enterprises like supermarkets and filling stations.",
    icon: greenArrow,
  },
  {
    header: "Organisations:",
    text: "Schools, churches, and other educational or religious institutions.",
    icon: greenArrow,
  },
  {
    header: "Government and Public Projects:",
    text: "Engaging with notable projects involving solar energy solutions for public infrastructure.",
    icon: greenArrow,
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-8 px-4 lg:px-8 space-y-8 lg:space-y-16">
      <MotionComponent
        as="h1"
        variants={fadeInVariants("down", 0.1, 0.5)}
        className={`text-xl lg:text-3xl text-center ${balgin_medium.className} `}
      >
        Innovation and Customer Focus
      </MotionComponent>
      <MotionComponent
        as="h2"
        variants={textVariants}
        className="text-xl lg:hidden text-[#074942] font-[900]"
      >
        Who we Serve
      </MotionComponent>
      <div className="grid grid-cols-[1fr] lg:grid-cols-[6fr_4fr] lg:gap-x-28">
        <div className="space-y-12">
          <MotionComponent
            as="h2"
            variants={textVariants}
            className={`text-xl hidden lg:block text-[#074942] ${balgin_medium.className} `}
          >
            Who we Serve
          </MotionComponent>
          <div className="space-y-8">
            {data.map((data, index) => (
              <div key={index} className="flex items-center gap-x-2 lg:gap-x-8">
                <MotionComponent
                  as="div"
                  variants={zoomInVariants((index + 1) / 10, 0.5)}
                >
                  <Image alt="" src={data.icon} width={50} height={50} />
                </MotionComponent>
                <MotionComponent
                  as="div"
                  variants={fadeInVariants("right", (index + 1) / 10, 0.5)}
                  className="space-x-2 text-sm lg:text-md"
                >
                  <span className={`${firs_medium.className}`}>
                    {data.header}
                  </span>
                  <span className={`text-gray-600 ${firs_regular.className} `}>
                    {data.text}
                  </span>
                </MotionComponent>
              </div>
            ))}
          </div>
        </div>
        <MotionComponent
          as="div"
          variants={fadeInVariants("left", 0.1, 0.5)}
          className="mx-auto row-start-1 row-end-3 lg:col-start-2 lg:col-end-3"
        >
          <Image
            className="absolute w-60 h-60 lg:w-[27em] lg:h-[27rem]"
            alt=""
            src={whoweareImg}
            width={0}
            height={0}
          />
          <Image
            className="ml-2 mt-2 w-60 h-60 lg:w-[27em] lg:h-[27rem]"
            alt=""
            src={whoweareBg}
            width={0}
            height={0}
          />
        </MotionComponent>
      </div>
      <div className="space-y-4 pb-8">
        <MotionComponent
          as="h2"
          variants={fadeInVariants("left", 0.1, 0.5)}
          className={`text-[#074942] text-xl lg:text-2xl ${balgin_bold.className} `}
        >
          Unique Selling Proposition
        </MotionComponent>
        <MotionComponent
          as="div"
          variants={fadeInVariants("right", 0.1, 0.5)}
          className="flex gap-x-2 items-center"
        >
          <Image
            className="w-6 h-6 animate-pulse"
            src={yellowStar}
            alt=""
            width={0}
            height={0}
          />
          <p
            className={`text-sm lg:text-md text-justify text-relaxed ${firs_regular.className}`}
          >
            With Soft Energy, everyone can afford solar energy through our
            unique 12-month installment plan.
          </p>
          <Image
            className="w-6 h-6 animate-pulse"
            src={yellowStar}
            alt=""
            width={0}
            height={0}
          />
        </MotionComponent>
      </div>
    </section>
  );
};

export default WhoWeServe;
