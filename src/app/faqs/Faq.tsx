"use client";

import Image from "next/image";
import faqIcon from "@/assets/icons/faqIcon.svg";
import { firs_medium, firs_regular } from "@/utils/font";

interface FaqPropType {
  toggleFaq: any;
  isOpen: boolean;
  data: {
    id: string;
    question: string;
    ans: string;
  };
}

const Faq = ({ data, toggleFaq, isOpen }: FaqPropType) => {
  return (
    <div
      className={`bg-white border-l-[#074942] border-l-solid ${
        isOpen && "border-l-[15px]"
      } rounded-lg cursor-pointer`}
      onClick={() => toggleFaq(data.id)}
    >
      <div className={`px-6 ${isOpen ? "py-8" : "py-4"}`}>
        <div className="flex justify-between items-center">
          <h1
            className={`${
              isOpen ? firs_medium.className : firs_regular.className
            }`}
          >
            {data.question}
          </h1>
          <Image className="w-10 h-10" src={faqIcon} alt="" />
        </div>
        {isOpen && (
          <p
            className={` ${firs_regular.className} text-sm pr-8 text-justify leading-6`}
          >
            {data.ans}
          </p>
        )}
      </div>
    </div>
  );
};

export default Faq;
