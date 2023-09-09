"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Img from "../Shared/NextImage/Img";
import SectionHeading from "../Shared/Typography/SectionHeading";
import SectionSubHeading from "../Shared/Typography/SectionSubHeading";
import { Fade, Slide } from "react-awesome-reveal";
const WhatIsRoyalDigital = () => {
  return (
    <ComponentWrapper style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-6">
        <Fade triggerOnce>
          <SectionHeading text=" What is Royal Digital Wallet?" />
        </Fade>

        <div className="lg:w-[800px] lg:h-[800px] md:h-[500px] h-[400px] md:w-[400px] w-full relative">
          <Img
            src="/Assets/WhatIsRoyalDigital.png"
            imgContainer="w-full h-full"
            imgStyle="md:object-fill object-contain"
          />

          <Fade
            triggerOnce
            className="sm:w-[150px] w-[130px] md:flex hidden items-center justify-center absolute lg:top-[45%] top-[43%] lg:-left-[16%] md:-left-[32%] -left-[42%]"
          >
            <SectionSubHeading text="Instant operations" />
          </Fade>

          <Fade
            triggerOnce
            className="sm:w-[150px] w-[130px] md:flex hidden items-center justify-center absolute top-[78%] lg:-left-[11%] md:-left-[27%] -left-[40%]"
          >
            <SectionSubHeading text="Protects the identity" />
          </Fade>
          <Fade
            triggerOnce
            className="sm:w-[150px] w-[130px] md:flex hidden items-center justify-center absolute top-[102%] lg:left-[40%] md:left-[33%] left-[27%]"
          >
            <SectionSubHeading text="Global System and Secure" />
          </Fade>
          <Fade
            triggerOnce
            className="sm:w-[150px] w-[130px] md:flex hidden items-center justify-center absolute top-[78%] lg:-right-[13%] md:-right-[31%] -right-[43%]"
          >
            <SectionSubHeading text="No transaction fees" />
          </Fade>
          <Fade
            triggerOnce
            className="sm:w-[150px] w-[130px] md:flex hidden items-center justify-center absolute lg:top-[45%] top-[43%] lg:-right-[18%] md:-right-[35%] -right-[43%]"
          >
            <SectionSubHeading text="Without blockchain fluctuations" />
          </Fade>
        </div>
        <div className="w-full flex md:hidden flex-col items-center justify-start gap-4">
          <SectionSubHeading text="Instant operations" />
          <SectionSubHeading text="Protects the identity" />
          <SectionSubHeading text="Global System and Secure" />
          <SectionSubHeading text="No transaction fees" />
          <SectionSubHeading text="Without blockchain fluctuations" />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default WhatIsRoyalDigital;
