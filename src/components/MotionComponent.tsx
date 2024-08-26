"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface IMotionComponentProps {
  as: string;
  variants?: any;
  className?: string;
  href?: string;
  src?: string;
  children?: ReactNode;
  // onClick: any;
}

const MotionComponent = ({
  as = "div",
  variants,
  children,
  className,
  href,
  src,
  // onClick,
  ...rest
}: IMotionComponentProps) => {
  const shouldbeReduceMotion = useReducedMotion();
  const Component = motion[as as keyof typeof motion];

  return (
    <Component
      className={className}
      href={href}   
      src={src}
      // onClick={onClick}
      variants={shouldbeReduceMotion ? "visible" : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default MotionComponent;
