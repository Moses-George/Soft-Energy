import batteryImg from "@/assets/images/batteryImg.png";
import batteryIcon1 from "@/assets/icons/batteryIcon1.svg";
import batteryIcon2 from "@/assets/icons/batteryIcon2.svg";
import Card from "./Card";
import MotionComponent from "@/components/MotionComponent";
import { textVariants } from "@/utils/motion";
import { balgin_medium } from "@/utils/font";

const batteriesData = [
  {
    id: "B1",
    name: "Lithium-Ion Battery",
    des: ["Long-lasting"],
    img: batteryImg,
    icon: batteryIcon1,
  },
  {
    id: "B2",
    name: "Lead-Acid Battery",
    des: ["Cost-effective with maintenance options."],
    img: batteryImg,
    icon: batteryIcon2,
  },
];

const Batteries = () => {
  return (
    <section className="space-y-6">
      <MotionComponent
        as="h1"
        variants={textVariants}
        className={`text-[#074942] text-xl lg:text-2xl ${balgin_medium.className} `}
      >
        Batteries
      </MotionComponent>
      <div className="grid grid-cols-[1fr] space-y-6 lg:space-y-0 lg:grid-cols-[1fr_1fr] gap-x-12">
        {batteriesData.map((data, index) => (
          <Card key={data.id} data={data} animationDelay={(index + 1) / 10} />
        ))}
      </div>
    </section>
  );
};

export default Batteries;
