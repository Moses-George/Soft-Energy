import miscIcon from "@/assets/icons/misc-55.svg";
import Image from "next/image";
import iphone from "@/assets/images/Rectangle.png";
import eclipse from "@/assets/images/Ellipse.png";
import arrow from "@/assets/icons/arrow-12 (1).svg";
import MotionComponent from "./MotionComponent";
import { fadeInVariants } from "@/utils/motion";
import {
  firs_regular,
  firs_bold,
  firs_light,
  balgin_medium,
  balgin_bold,
  balgin_regular,
} from "@/utils/font";

const data = [
  {
    header: "Contact:",
    text: "Our team will reach out to you to understand your energy needs and schedule a consultation.",
    icon: miscIcon,
  },
  {
    header: "Power Audit:",
    text: "We'll conduct a comprehensive power audit to determine the best solar solution for your requirements.",
    icon: miscIcon,
  },
  {
    header: "KYC & Payment:",
    text: " Once the Know Your Customer (KYC) process is complete, and your payment plan is set up, we'll proceed.",
    icon: miscIcon,
  },
  {
    header: "Installation:",
    text: "Our expert team will install the solar panels and systems at your location after your first installment payment is made.",
    icon: miscIcon,
  },
  {
    header: "Support:",
    text: "Enjoy ongoing support and maintenance to ensure optimal performance of your solar energy system.",
    icon: miscIcon,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-[#7BECAB2E] opacity-18 lg:pt-8 lg:pb-16 px-2 lg:pl-12 lg:pr-20"
    >
      <h1
        className={`text-xl lg:text-3xl py-8 text-center lg:text-start ${balgin_medium.className} `}
      >
        How it Works
      </h1>
      <div className="lg:flex justify-cente w-full gap-x-8 space-y-8 lg:space-y-0">
        <div className="bg-white lg:w-[50%] rounded-lg pl-4 pr-4 lg:pr-12 py-12">
          <div className="space-y-5">
            <div className="flex items-center gap-x-2 lg:gap-x-4">
              <Image
                className="w-8 h-8"
                alt=""
                src={miscIcon}
                width={0}
                height={0}
              />
              <p className={`text-sm lg:text-md ${firs_regular.className}`}>
                Click the <span className="font-[500]">'Get Started'</span> button to express your
                interest in our solar solutions.
              </p>
            </div>
            {data.map((data, index) => (
              <div key={index} className="flex items-center gap-x-2 lg:gap-x-4">
                <MotionComponent
                  as="div"
                  variants={fadeInVariants("down", (index + 1) / 10, 0.5)}
                >
                  <Image
                    className="w-8 h-8 lg:w-10 lg:h-10 animate-pulse"
                    alt=""
                    src={data.icon}
                    width={0}
                    height={0}
                  />
                </MotionComponent>
                <MotionComponent
                  as="div"
                  variants={fadeInVariants("right", (index + 1) / 10, 0.5)}
                  className="space-x-2 text-sm lg:text-md max-w-md"
                >
                  <span className={`leading-8 ${balgin_medium.className}`}>
                    {data.header}
                  </span>
                  <span className={`${firs_regular.className}`}>
                    {data.text}
                  </span>
                </MotionComponent>
              </div>
            ))}
          </div>
        </div>
        <div className="relative bg-[#074942] flex-col-reverse flex lg:flex-row gap-x-6 text-white lg:pt-20 px-4 lg:px-12 h-fit w-[90%] mx-auto lg:mx-0 lg:w-[35rem] rounded-t-lg lg:rounded-lg">
          <Image
            src={eclipse}
            alt=""
            width="0"
            height="0"
            className="absolute -top-20 -left-20 "
          />
          <MotionComponent as="div" variants={fadeInVariants("left", 0.1, 0.7)}>
            <Image
              src={iphone}
              alt=""
              width="0"
              height="0"
              className="w-48 h-72 mx-auto lg:mx-0 relative"
            />
          </MotionComponent>
          <div className="lg:self-center flex-col-reverse">
            <div className="flex font-medium text-sm items-center justify-center lg:justify-start">
              <p className={`${balgin_medium.className}`}>Get Started</p>
              <Image src={arrow} alt="" />
            </div>
            <p
              className={`text-xs text-center lg:text-start ${firs_light.className} lg:max-w-[13rem]`}
            >
              Click the 'Get Started' button to express your interest in our
              solar solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
