import Card from "./Card";
import cardIcon1 from "@/assets/icons/cardIcon1.svg";
import cardIcon2 from "@/assets/icons/cardIcon2.svg";
import cardIcon3 from "@/assets/icons/cardIcon3.svg";
import cardIcon4 from "@/assets/icons/cardIcon4.svg";
import MotionComponent from "../MotionComponent";
import { fadeInVariants, textVariants } from "@/utils/motion";
import {
  balgin_bold,
  balgin_extra_bold,
  balgin_medium,
  balgin_regular,
  firs_regular,
} from "@/utils/font";

const OurServices = () => {
  return (
    <section
      id="our-services"
      className="bg-[#7BECAB2E] opacity-[18] lg:mt-20 pb-8 mx-auto"
    >
      <MotionComponent
        as="h1"
        variants={fadeInVariants("down", 0.1, 0.5)}
        className={` ${balgin_regular.className} text-2xl lg:text-4xl text-center py-8 lg:py-16`}
      >
        Our Services
      </MotionComponent>
      <div className="space-y-8 lg:pl-12">
        <MotionComponent
          as="h2"
          variants={textVariants}
          className={`text-xl lg:text-3xl text-[#074942] pl-4 lg:pl-0 ${balgin_bold.className} `}
        >
          Solar Energy Solutions
        </MotionComponent>
        <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-x-4 lg:gap-x-8 gap-y-4 lg:gap-y-8 w-full px-4 lg:px-0 lg:w-[90%]">
          <Card
            animationDelay={0.1}
            header="Residential Installations"
            text="Affordable solar solutions for homeowners and working professionals, with flexible payment plans."
            icon={cardIcon1}
          />
          <Card
            animationDelay={0.2}
            header="Commercial Solutions"
            text="Tailored solar installations for businesses, including small SMEs, supermarkets, bars, and restaurants."
            icon={cardIcon2}
          />
          <Card
            animationDelay={0.3}
            header="Institutional Projects"
            text="Customized solar energy setups for schools, churches, and other large organizations."
            icon={cardIcon3}
          />
          <Card
            animationDelay={0.4}
            header="Government Partnerships"
            text="Collaboration on projects like solar streetlights and community energy initiatives."
            icon={cardIcon4}
          />
          <div className="hidden col-start-2 col-end-4 lg:grid w-full">
            <MotionComponent
              as="h1"
              variants={textVariants}
              className={`text-[#074942] ${balgin_bold.className} self-center max-w-[19rem] text-4xl`}
            >
              Flexible Payment Plans
            </MotionComponent>
            <MotionComponent
              as="p"
              variants={textVariants}
              className={`${firs_regular.className} w-full lg:max-w-[70%] text-sm leading-7`}
            >
              Enjoy up to 12 months of installment payments, making solar energy
              accessible to all income levels.
            </MotionComponent>
          </div>
        </div>
      </div>
      <div className="pl-6 pr-8 pt-6 lg:hidden">
        <MotionComponent
          as="h1"
          variants={textVariants}
          className={`${balgin_bold.className} text-[#074942] self-center text-lg lg:text-4xl`}
        >
          Flexible Payment Plans
        </MotionComponent>
        <MotionComponent
          as="p"
          variants={textVariants}
          className="text-sm leading-[25px]"
        >
          Enjoy up to 12 months of installment payments, making solar energy
          accessible to all income levels.
        </MotionComponent>
      </div>
    </section>
  );
};

export default OurServices;
