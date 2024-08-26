import inverterImg from "@/assets/images/inverterImg.png";
import inverterIcon from "@/assets/icons/inverterIcon.svg";
import Card from "./Card";
import MotionComponent from "@/components/MotionComponent";
import { textVariants } from "@/utils/motion";
import { balgin_medium } from "@/utils/font";

const inverterData = [
  {
    id: "I1",
    name: "Micro Inverters",
    des: ["Cost-effective for minimal shading."],
    img: inverterImg,
    icon: inverterIcon,
  },
  {
    id: "I2",
    name: "String Inverters",
    des: ["Optimizes each panel for complex setups."],
    img: inverterImg,
    icon: inverterIcon,
  },
];

const Inverter = () => {
  return (
    <section className="space-y-6">
      <MotionComponent
        as="h1"
        variants={textVariants}
        className={`text-[#074942] text-2xl ${balgin_medium.className} `}
      >
        Inverter
      </MotionComponent>
      <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] space-y-6 lg:space-y-0 gap-x-12">
        {inverterData.map((data, index) => (
          <Card key={data.id} data={data} animationDelay={(index + 1) / 10} />
        ))}
      </div>
    </section>
  );
};

export default Inverter;
