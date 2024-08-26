import MotionComponent from "@/components/MotionComponent";
import { firs_medium, firs_regular } from "@/utils/font";
import { fadeInVariants } from "@/utils/motion";
import Image, { StaticImageData } from "next/image";

interface productType {
  animationDelay: number;
  data: {
    id: string;
    name: string;
    des: string[];
    img: StaticImageData;
    icon: StaticImageData;
  };
}

const Card = ({ data, animationDelay }: productType) => {
  return (
    <MotionComponent
      as="div"
      variants={fadeInVariants("up", animationDelay, 0.5)}
      className="bg-white rounded-lg flex h-fit"
    >
      <div className="flex gap-x-4 items-center p-4 text-sm lg:text-md">
        <Image src={data.img} alt="" width={120} height={80} />
        <div className="space-y-2">
          <h1 className={`font-bold firs-bold ${firs_medium.className}`}>
            {data.name}
          </h1>
          {data.des.map((data, index) => (
            <div key={index} className="flex gap-x-2 items-center">
              <div className="w-2 h-2 rounded-full bg-black" />
              <p
                className={`disc firs-bold ${firs_regular.className} text-gray-600`}
              >
                {data}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        className="w-4 w-4 lg:w-6 lg:h-6 ml-auto mb-auto"
        src={data.icon}
        alt=""
        width={0}
        height={0}
      />
    </MotionComponent>
  );
};

export default Card;
