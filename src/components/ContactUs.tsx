import Image from "next/image";
import misc from "@/assets/icons/misc-58.svg";
import trippleArrow from "@/assets/icons/trippleArrrow.svg";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import linkedInIcon from "@/assets/icons/linkedin.svg";
import xIcon from "@/assets/icons/x.svg";
import MotionComponent from "./MotionComponent";
import { zoomInVariants, fadeInVariants } from "@/utils/motion";
import { balgin_bold, balgin_regular, firs_regular } from "@/utils/font";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="lg:flex lg:gap-x-16 gap-x-8 lg:px-16 px-4 py-12"
    >
      <div className="">
        <div className="flex items-center gap-x-2 ">
          <h1
            className={`text-[#074942] text-xl lg:text-3xl ${balgin_bold.className} `}
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
            <h1 className={` ${balgin_regular.className} text-lg`}>
              Get in touch with Us
            </h1>
            <p className={`${firs_regular.className} text-sm lg:text-md`}>
              We'd love to hear from you! Contact us for inquiries, quotes, or
              more information.
            </p>
          </div>
        </div>
        <div className={`${firs_regular.className} text-sm lg:text-md mt-4`}>
          <div className="flex gap-x-2 items-center">
            <MotionComponent as="div" variants={zoomInVariants(0.1, 0.5)}>
              <Image src={trippleArrow} alt="" width={60} height={20} />
            </MotionComponent>
            <MotionComponent
              as="p"
              variants={fadeInVariants("right", 0.1, 0.5)}
            >
              Phone Number: +234 912 398 5246
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
              Email: softenergyapp@gmail.com
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
              Address: 104, Musa Danjuma, Gwarinpa, Federal Capital Territory.
              Nigeria
            </MotionComponent>
          </div>
        </div>
      </div>
      <div className="pt-20 rounded-md space-y-4 border-l-solid border-l-4 pl-8 border-l-[#074942]">
        <div className="space-y-4">
          <h2 className={`${balgin_regular.className}`}>Follow us</h2>
          <p className={`${firs_regular.className} text-sm lg:text-md`}>
            Stay connected through our social media channels
          </p>
        </div>
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-x-2">
            <Image
              className="w-8 h-8 lg:w-12 lg:w-12"
              src={whatsappIcon}
              alt=""
              width={0}
              height={0}
            />
            <p>+234 912 398 5246</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Image
              className="w-8 h-8 lg:w-12 lg:w-12"
              src={instagramIcon}
              alt=""
              width={0}
              height={0}
            />
            <p>https://www.instagram.com/softenergyapp/</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Image
              className="w-8 h-8 lg:w-12 lg:w-12"
              src={linkedInIcon}
              alt=""
              width={0}
              height={0}
            />
            <p>https://www.linkedin.com/company/softenergyng/</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Image
              className="w-8 h-8 lg:w-12 lg:w-12"
              src={xIcon}
              alt=""
              width={0}
              height={0}
            />
            <p>https://x.com/softenergyapp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
