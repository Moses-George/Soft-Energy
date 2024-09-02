import Image from "next/image";
import sunIcon from "@/assets/icons/sunIcon.svg";
import MotionComponent from "./MotionComponent";
import { textVariants } from "@/utils/motion";
import { firs_regular, firs_medium, balgin_medium, balgin_regular } from "@/utils/font";

const Footer = () => {
  return (
    <footer className="bg-[#074942] text-white">
      <Image
        className="w-20 h-20 lg:w-24 lg:h-24"
        src={sunIcon}
        alt=""
        width={0}
        height={0}
      />
      <div className="px-6 lg:px-32 -mt-4 lg:-mt-16">
        <h1
          className={` ${balgin_regular.className} text-lg lg:text-2xl text-center lg:text-start`}
        >
          About Soft Energy
        </h1>
        <div className="grid grid-cols-[1fr] lg:grid-cols-[6fr_4fr] space-y-12 lg:space-y-8 lg:space-y-0 gap-x-12 justify-items-center">
          <div className="text-sm space-y-6 lg:space-y-8 self-end lg:text-start leading-[25px]">
            <MotionComponent
              as="p"
              variants={textVariants}
              className={`${firs_regular.className} text-center lg:text-start`}
            >
              SoftEnergy, a product of Soft KYC, is dedicated to making solar
              energy accessible and affordable for everyone. We provide
              innovative energy solutions that empower homes, businesses, and
              communities.
            </MotionComponent>
            <p className={`space-x-2 ${firs_regular.className} text-sm lg:text-md text-center lg:text-start`}>
              <span className={`${firs_medium.className}`}>Our Website:</span>
              <span className={`${firs_regular.className}`}>
                [softenergy.ng](https://softenergy.ng)
              </span>
            </p>
          </div>
          <div className={`flex gap-x-20 font-[500] ${firs_medium.className}`}>
            <ul className="space-y-4">
              <li>Home</li>
              <li>Services</li>
              <li>Partners</li>
              <li>Innovation</li>
            </ul>
            <ul className="space-y-4">
              <li>Support</li>
              <li>Contat Us</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`text-white opacity-50 text-center pb-4 pt-20 text-sm space-y-2 ${firs_regular.className}`}
      >
        <p>Copyright by [softenergy.ng](https://softenergy.ng)</p>
        <p> All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
