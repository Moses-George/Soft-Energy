import Image, { StaticImageData } from "next/image";
import MotionComponent from "../MotionComponent";
import { zoomInVariants } from "@/utils/motion";
import { firs_bold, firs_regular } from "@/utils/font";

interface CardPropType {
  header: string;
  text: string;
  icon: StaticImageData;
  animationDelay: number;
}

const Card = ({ header, text, icon, animationDelay }: CardPropType) => {
  return (
    <MotionComponent
      as="div"
      variants={zoomInVariants(animationDelay, 0.5)}
      className="bg-white rounded-md firs-bold"
    >
      <Image
        className="ml-auto w-6 h-6"
        alt="icon"
        src={icon}
        width={0}
        height={0}
      />
      <div className="py-6 lg:py-12 pl-2 lg:pl-6 pr-2 lg:pr-8 space-y-4">
        <h2 className={` text-sm lg:text-[1rem] ${firs_bold.className} `}>{header}</h2>
        <p className={`text-gray-600 text-sm leading-7 ${firs_regular.className} `}>{text}</p>
      </div>
    </MotionComponent>
  );
};

export default Card;
