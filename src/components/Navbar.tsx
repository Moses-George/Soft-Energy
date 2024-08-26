import logo from "@/assets/images/logo.png";
import Image from "next/image";
import hamburger from "@/assets/icons/hamburger.svg";
import Link from "next/link";
import { firs_regular } from "@/utils/font";

const Navbar = () => {
  return (
    <nav className="flex lg:gap-x-44 py-6 justify-between items-center px-8 lg:px-0 lg:justify-center">
      <Image
        className="w-28 lg:w-36"
        alt="soft-energy logo"
        src={logo}
        width={0}
        height={0}
      />
      <Image
        className="lg:hidden"
        src={hamburger}
        alt=""
        width={30}
        height={30}
      />
      <ul
        className={` hidden lg:flex gap-x-16 font-normal ${firs_regular.className}`}
      >
        <li className="text-red">
          {" "}
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#our-services">Our Services</Link>
        </li>
        <li>
          {" "}
          <Link href="#how-it-works">How it works</Link>
        </li>
        <li>
          {" "}
          <Link href="#customer-support">Customer Support</Link>
        </li>
        <li>
          {" "}
          <Link href="#contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
