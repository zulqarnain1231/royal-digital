"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Img from "../Shared/NextImage/Img";
import SectionHeading from "../Shared/Typography/SectionHeading";
import SectionSubHeading from "../Shared/Typography/SectionSubHeading";
import { Slide, Fade } from "react-awesome-reveal";
const LaunchingIn = () => {
  return (
    <ComponentWrapper id="launchingIN" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <Fade triggerOnce>
          <SectionHeading text="Coming Soon" />
        </Fade>

        <div className="w-full grid lg:grid-cols-2 gap-16 md:gap-4">
          <Fade triggerOnce>
            <Img
              src="/Assets/LaunchingIn.png"
              imgContainer="lg:h-[560px] h-[450px] w-full"
              imgStyle="lg:object-fill object-contain"
            />
          </Fade>
          <Fade  triggerOnce>
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <SectionHeading text="ICO Launching in" />
              <SectionSubHeading text="Royal Digital will start on July 12 2023" />
              <SectionSubHeading text="Redifining The Digital Landscape With Premium Ecellence" />
            </div>
          </Fade>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default LaunchingIn;
