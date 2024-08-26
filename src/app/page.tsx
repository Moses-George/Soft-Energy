import Image from "next/image";
import styles from "./page.module.css";
import SlantSection from "@/components/SlantSection";
import OurServices from "@/components/ourServices/OurServices";
import WhoWeServe from "@/components/WhoWeServe";
import OurPartners from "@/components/OurPartners";
import HowItWorks from "@/components/HowItWorks";
import CustomerSupport from "@/components/CustomerSupport";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
     <div>
      <HeroSection />
      <SlantSection />
      <OurServices />
      <WhoWeServe />
      <OurPartners />
      <HowItWorks />
      <CustomerSupport />
      <ContactUs />
     </div>
  );
}
