"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useTheme, useMediaQuery } from "@mui/material";
import Data from "../../../constants/Data/Static.json";
import MapCard from "./MapCard";

const TimeLine = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="w-full flex items-center justify-center">
      <Timeline position={matches ? "alternate" : "right"}>
        <TimelineItem className="flex items-center justify-start gap-0 lg:gap-6 z-10">
          <TimelineSeparator className="md:h-[280px] sm:h-[420px] h-[390px]">
            <TimelineDot className=" h-[16px] w-[16px]" />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <TimelineContent>
            <MapCard
              title="01 2023"
              styles="sm:py-4 py-6"
              details={Data.RoadMap.phase1}
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex items-center justify-start gap-0 lg:gap-6 z-10">
          <TimelineSeparator className="md:h-[360px] lg:h-[300px] sm:h-[420px] h-[390px]">
            <TimelineDot className=" h-[16px] w-[16px]" />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <TimelineContent>
            <MapCard
              title="02 2023"
              styles="sm:py-4 py-6"
              details={Data.RoadMap.phase2}
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex items-center justify-start gap-0 lg:gap-6 z-10">
          <TimelineSeparator className="md:h-[250px] sm:h-[420px] h-[390px]">
            <TimelineDot className=" h-[16px] w-[16px]" />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <TimelineContent>
            <MapCard
              title="03 2023"
              styles="sm:py-4 py-6"
              details={Data.RoadMap.phase3}
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex items-center justify-start gap-0 lg:gap-6 z-10">
          <TimelineSeparator className="md:h-[250px] sm:h-[420px] h-[330px]">
            <TimelineDot className=" h-[16px] w-[16px]" />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <TimelineContent>
            <MapCard
              title="04 2023"
              styles="sm:py-4 py-6"
              details={Data.RoadMap.phase4}
            />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
