import solar1 from "@/assets/images/solar1.png";
import solar2 from "@/assets/images/solar2.png";
import solar3 from "@/assets/images/solar3.png";
import solarIcon1 from "@/assets/icons/solarIcon1.svg";
import solarIcon3 from "@/assets/icons/solarIcon3.svg";
import Card from "./Card";
import MotionComponent from "@/components/MotionComponent";
import { textVariants } from "@/utils/motion";
import { balgin_medium } from "@/utils/font";

const solarPanelData = [
  {
    id: "S1",
    name: "Monocrystalline Solar Panel",
    des: ["High efficiency."],
    img: solar1,
    icon: solarIcon1,
  },
  {
    id: "S2",
    name: "Polycrystalline Solar Panel",
    des: ["Affordable."],
    img: solar2,
    icon: solarIcon3,
  },
  {
    id: "S3",
    name: "Thin-film Solar Panel",
    des: ["Lightweight", "flexible."],
    img: solar3,
    icon: solarIcon1,
  },
];

const SolarPanel = () => {
  return (
    <section className="space-y-6">
      <MotionComponent
        as="h1"
        variants={textVariants}
        className={` ${balgin_medium.className} text-[#074942] text-xl lg:text-2xl`}
      >
        Solar Panels
      </MotionComponent>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8 gap-4">
        {solarPanelData.map((data, index) => (
          <Card key={data.id} data={data} animationDelay={(index + 1) / 10} />
        ))}
        <div className="my-auto w-full lg:max-w-[70%]">
          <MotionComponent
            as="h1"
            variants={textVariants}
            className={`tet-xl text-center lg:text-start lg:text-2xl text-[#074942] w-fit ${balgin_medium.className}`}
          >
            With our Different Ranges of Products
          </MotionComponent>
        </div>
      </div>
    </section>
  );
};

export default SolarPanel;
