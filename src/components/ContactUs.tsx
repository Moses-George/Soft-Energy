import Image from "next/image";
import misc from "@/assets/icons/misc-58.svg";
import trippleArrow from "@/assets/icons/trippleArrrow.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import linkedInIcon from "@/assets/icons/linkedin.svg";
import xIcon from "@/assets/icons/x.svg";
import MotionComponent from "./MotionComponent";
import { zoomInVariants, fadeInVariants } from "@/utils/motion";
import { balgin_bold, balgin_regular, firs_regular } from "@/utils/font";

const ContactUs = () => {
  return (
    <section id="contact-us" className="lg:flex justify-cente lg:gap-x-16 gap-x-8 lg:px-16 px-4 py-12">
      <div className="space-y-4">
        <div className="flex gap-x-2 ">
          <h1
            className={`text-[#074942] text-2xl lg:text-3xl ${balgin_bold.className} `}
          >
            Contact us
          </h1>
          <Image
            className="w-16 h-16 lg:w-28 lg:h-28"
            src={misc}
            alt=""
            width={0}
            height={0}
          />
        </div>
        <div>
          <div className="space-y-4">
            <h1 className={` ${balgin_regular.className} text-lg`}>Get in touch with Us</h1>
            <p className={`${firs_regular.className}`}>
              We'd love to hear from you! Contact us for inquiries, quotes, or
              more information.
            </p>
          </div>
        </div>
        <div className={`${firs_regular.className}`}>
          <div className="flex gap-x-2 items-center">
            <MotionComponent as="div" variants={zoomInVariants(0.1, 0.5)}>
              <Image src={trippleArrow} alt="" width={60} height={20} />
            </MotionComponent>
            <MotionComponent
              as="p"
              variants={fadeInVariants("right", 0.1, 0.5)}
            >
              Phone: +234-123-4567
            </MotionComponent>
          </div>
          <div className="flex gap-x-2 items-center">
            <MotionComponent as="div" variants={zoomInVariants(0.2, 0.5)}>
              <Image src={trippleArrow} alt="" width={60} height={20} />
            </MotionComponent>
            <MotionComponent
              as="p"
              variants={fadeInVariants("right", 0.2, 0.5)}
            >
              Email [contact@softenergy.ng] (mail to: contact@softenergy.ng)
            </MotionComponent>
          </div>
          <div className="flex gap-x-2 items-center">
            <MotionComponent as="div" variants={zoomInVariants(0.3, 0.5)}>
              <Image src={trippleArrow} alt="" width={60} height={20} />
            </MotionComponent>
            <MotionComponent
              as="p"
              variants={fadeInVariants("right", 0.1, 0.5)}
            >
              Address: 123 Solar Street, Energy City, NG
            </MotionComponent>
          </div>
        </div>
      </div>
      <div className="pt-20 rounded-md space-y-4 border-l-solid border-l-4 pl-8 border-l-[#074942]">
        <div className="space-y-4">
          <h2 className={`${balgin_regular.className}`}>Follow us</h2>
          <p className={`${firs_regular.className}`}>
            Stay connected through our social media channels
          </p>
        </div>
        <div className="flex gap-x-4">
          <Image src={facebookIcon} alt="" width={40} height={40} />
          <Image src={instagramIcon} alt="" width={40} height={40} />
          <Image src={linkedInIcon} alt="" width={40} height={40} />
          <Image src={xIcon} alt="" width={40} height={40} />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
