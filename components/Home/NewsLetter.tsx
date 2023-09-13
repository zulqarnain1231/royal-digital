"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionSubHeading from "../Shared/Typography/SectionSubHeading";
import SectionHeading from "../Shared/Typography/SectionHeading";
import { Fade, Slide } from "react-awesome-reveal";
const NewsLetter = () => {
  return (
    <ComponentWrapper id="newsletter" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-6">
        <Fade triggerOnce>
          <SectionHeading text="Subscribe to our Newsletter" />
        </Fade>
        <Fade triggerOnce>
          <SectionSubHeading text="Keep up to date with our progress.Subscribe for e-mail updates." />
        </Fade>

        <Fade
          triggerOnce
          className="lg:w-[40%] md:w-[60%] w-full h-[60px] flex items-center justify-between p-3 bg-purple-main rounded-[28px]"
        >
          <div className="w-full flex items-center justify-between">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email Address"
              className="w-full border-none focus:outline-none bg-transparent text-white-main text-sm font-normal placeholder:text-white-main pl-4"
            />
            <button className="h-[50px] px-6 text-white-main font-semibold text-base rounded-[28px] bg-gradient-to-tr from-brand-secondary to-brand-primary">
              Submit
            </button>
          </div>
        </Fade>
      </div>
    </ComponentWrapper>
  );
};

export default NewsLetter;
