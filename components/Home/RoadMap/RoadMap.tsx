"use client";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import TimeLine from "./TimeLine";
import { Fade } from "react-awesome-reveal";
const RoadMap = () => {
  return (
    <ComponentWrapper id="roadmap" style="lg:py-16 p-10">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <Fade triggerOnce>
          <SectionHeading text="RoadMap" />
        </Fade>

        <TimeLine />
      </div>
    </ComponentWrapper>
  );
};

export default RoadMap;
