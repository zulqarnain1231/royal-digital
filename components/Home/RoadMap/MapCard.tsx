"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
interface Props {
  title: string;
  details: Array<string>;
  styles?: string;
}
const MapCard: React.FC<Props> = ({
  title,
  details,
  styles = "md:h-[320px] sm:h-[360px]  h-[460px]",
}: Props) => {
  return (
    <Fade
      triggerOnce
      className={`w-full flex flex-col items-start justify-start gap-4 md:px-6 md:py-4 p-4 bg-gradient-to-tr from-brand-secondary to-brand-primary rounded-[16px] cursor-pointer z-10 ${styles}`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <p className="text-white-main text-[20px] leading-7 font-bold">
          {title}
        </p>
        <div className="w-full flex flex-col items-start justify-start gap-3">
          {details.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className="w-full flex items-start justify-start gap-2"
              >
                <BsArrowRight className="h-[20px] w-[20px] text-white-main shrink-0" />
                <p className="text-base text-white-main text-left font-normal">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
};

export default MapCard;
