import smilyFaceIcon from "@/assets/icons/lllook.svg";
import Image from "next/image";
import maskGroup from "@/assets/images/Mask group (2).png";
import ellipse from "@/assets/icons/Ellipse 8.svg";
import { fadeInVariants, zoomInVariants } from "@/utils/motion";
import MotionComponent from "./MotionComponent";
import { firs_regular, firs_bold, balgin_regular } from "@/utils/font";

const data = [
  {
    header: "FAQs:",
    text: "Find answers to common questions.",
    icon: ellipse,
  },
  {
    header: "Live Chat:",
    text: "Chat with our support representatives in real-time.",
    icon: ellipse,
  },
  {
    header: "Email Support:",
    text: " Reach out to us at [support@softenergy.ng] for personalized assistance.",
    icon: ellipse,
  },
];

const CustomerSupport = () => {
  return (
    <section id="customer-support" className="py-20 space-y-12 px-4 lg:px-0">
      <div className="space-y-8">
        <div className="flex items-center justify-center gap-x-2">
          <h1
            className={`text-[#074942] text-xl lg:text-3xl ${balgin_regular.className} `}
          >
            Customer Support
          </h1>
          <Image
            className=""
            src={smilyFaceIcon}
            alt=""
            width={30}
            height={30}
          />
        </div>
        <p className={`text-center font-medium ${firs_regular.className} `}>
          Have questions or need assistance? Our dedicated support team is here
          to help you every step of the way.
        </p>
      </div>
      <div className="lg:flex gap-x-12 space-y-8 lg:space-y-0 justify-center">
        <Image
          className="mx-auto lg:mx-0 w-64 h-60 lg:w-[20rem] lg:h-[18rem] lg:my-auto"
          src={maskGroup}
          alt=""
          width={0}
          height={0}
        />
        <div className="space-y-4 lg:space-y-8 bg-[#7BECAB2E] py-6 lg:py-20 rounded-lg px-4 lg:pl-8 w-fit grid self-center">
          {data.map((data, index) => (
            <div key={index} className="flex items-center gap-x-4">
              <MotionComponent
                as="div"
                variants={zoomInVariants((index + 1) / 10, 0.5)}
              >
                <Image
                  className="w-4 h-4 lg:w-6 lg:h-6"
                  alt=""
                  src={data.icon}
                  width={0}
                  height={0}
                />
              </MotionComponent>
              <MotionComponent
                as="div"
                variants={fadeInVariants("right", (index + 1) / 10, 0.5)}
                className="space-x-2 lg:max-w-[80%] text-sm lg:text-md leading-relaxed firs-bold"
              >
                <span className={`text-md ${firs_bold.className}`}>
                  {data.header}
                </span>
                <span className={`${firs_regular.className}`}>{data.text}</span>
              </MotionComponent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
