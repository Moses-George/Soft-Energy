"use client";

import Image from "next/image";
import Faq from "./Faq";
import sunIcon from "@/assets/icons/sunIcon.svg";
import { balgin_bold, firs_regular } from "@/utils/font";
import frame from "@/assets/icons/Frame.svg";
import { useState } from "react";

const faqs = [
  {
    id: "faq1",
    question: "What is Soft Energy.ng?",
    ans: "Soft Energy.ng is a company dedicated to providing accessible and affordable renewable energy solutions to individuals, businesses, and government entities. We offer flexible payment plans that allow customers to enjoy sustainable energy without the heavy upfront cost.",
  },
  {
    id: "faq2",
    question: "How does Soft Energy.ng's payment plan work?",
    ans: "Our payment plans are designed to be flexible and convenient. Clients can make an upfront payment of as low as 30% of the total cost and spread the remaining balance over a period of up to 11 months. Payments are made in monthly installments tailored to your financial capacity.",
  },
  {
    id: "faq3",
    question: "What products and services does Soft Energy.ng offer?",
    ans: "We offer a range of energy solutions, including solar panels, inverters, and batteries, as well as installation and maintenance services. Our products cater to various power needs, from small households to large businesses.",
  },
  {
    id: "faq4",
    question: "Who is eligible for Soft Energy.ng's payment plan?",
    ans: "Our payment plans are available to individuals with stable income sources, businesses, and government entities. We conduct a thorough Know Your Customer (KYC) process to ensure that all clients meet our eligibility criteria.",
  },
  {
    id: "faq5",
    question: "How do I apply for Soft Energy.ng's services?",
    ans: "You can apply by contacting us through our website, social media pages, or by visiting our office. Our team will guide you through the process, including product selection, payment plan options, and the necessary documentation.",
  },
  {
    id: "faq6",
    question: "What happens if I miss a payment?",
    ans: "We understand that financial situations can change. If you miss a payment, our team will work with you to find a solution. However, consistent missed payments may lead to the initiation of our asset recovery process.",
  },
  {
    id: "faq7",
    question: "Can I pay off my balance early?",
    ans: "Yes, you can choose to pay off your balance early without any penalties. Doing so may even reduce the total interest you pay over the life of the agreement.",
  },
  {
    id: "faq8",
    question: "What happens if my energy system needs maintenance?",
    ans: "During the warranty period, maintenance services are covered by GreenKapital, our partner. After the warranty period, you can still receive maintenance services at standard fees.",
  },
  {
    id: "faq9",
    question: "How do I know which energy system is right for me?",
    ans: "Our team will conduct a power audit of your home or business to determine your energy needs. Based on this audit, we will recommend the most suitable energy system for you.",
  },
  {
    id: "faq10",
    question: "Is there a customer support service?",
    ans: "Yes, we offer comprehensive customer support. You can reach out to us via phone, email, or our social media channels for any inquiries or assistance.",
  },
];

const Faqs = () => {
  const [selectedFaq, setSelectedFaq] = useState(["faq1"]);
  // const isOpen = selectedFaq.includes(data.id);

  const toggleFaq = (id: string) => {
    if (selectedFaq.includes(id)) {
      setSelectedFaq([]);
    } else {
      setSelectedFaq([id]);
    }
  };
  return (
    <section className="relative bg-[#7BECAB2E] opacity-18">
      <Image
        className="absolute w-20 h-20 lg:w-28 lg:h-28"
        src={sunIcon}
        alt=""
        width={0}
        height={0}
      />
      <div className="text-center space-y-8 py-8 lg:py-20">
        <h1 className={` ${balgin_bold.className} text-[#074942] text-xl lg:text-[38px]`}>
          Frequently Asked Questions
        </h1>
        <p className={`px-4 leading-[25px] text-sm lg:text-[22px] ${firs_regular.className} `}>
          Find answers to common questions.
        </p>
      </div>
      <div className="px-4 lg:px-16 space-y-6">
        {faqs.map((data) => (
          <Faq
            key={data.id}
            data={data}
            isOpen={selectedFaq.includes(data.id)}
            toggleFaq={toggleFaq}
          />
        ))}
      </div>
      <div className="w-full pt-8">
        <Image className="ml-auto" src={frame} alt="" />
      </div>
    </section>
  );
};

export default Faqs;
