"use client";
import React, { useState } from "react";
import Link from "next/link";
import Img from "@/components/Shared/NextImage/Img";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import SectionSubHeading from "@/components/Shared/Typography/SectionSubHeading";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Dialog from "@mui/material/Dialog";
import { MdOutlineCancel } from "react-icons/md";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDialogue = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  return (
    <ComponentWrapper id="about" style="lg:py-16 py-10">
      <div className="w-full h-full flex flex-col items-center justify-start gap-8">
        <Fade triggerOnce>
          <div className="w-full flex sm:flex-row flex-col lg:items-center sm:items-start items-center sm:justify-center justify-start sm:gap-0 gap-6">
            <div className="flex flex-col items-center justify-start gap-3 z-10">
              <SectionHeading text="About" />
              <SectionSubHeading
                text="Why choosing Royal Digital?
"
              />
            </div>
            <Link
              href={"#about"}
              onClick={toggleDialogue}
              className="zoomAnimation sm:-ml-8"
            >
              <Img
                src="/Assets/PlayButton.png"
                imgContainer="h-[150px] w-[180px]"
                imgStyle="object-contain"
              />
            </Link>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div className="md:w-[75%] w-full mx-auto flex items-center justify-center">
            <p className="text-white-main md:text-xl text-lg font-[300] text-center">
              {" "}
              Royal Digital Wallet is a comprehensive ecosystem that strives to
              address the evolving needs of individuals in the digital era, both
              socially and economically. With a vision to achieve a remarkable
              market value of $300 billion by 2030, Royal Digital Wallet has
              outlined a roadmap encompassing six key areas, wherein it intends
              to offer its premium products and services.
            </p>
          </div>
        </Fade>
      </div>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "1px",
            maxWidth: "unset",
            position: "relative",
            overflow: "visible",
          },
          "& ::-webkit-scrollbar": {
            width: "0px",
          },
        }}
        open={isOpen}
        onClose={toggleDialogue}
      >
        <div
          className={`sm:h-[400px] h-[350px] lg:w-[750px] md:w-[600px] w-full`}
        >
          <button
            onClick={toggleDialogue}
            className="w-[32px] h-[32px] absolute -top-8 right-0  flex justify-center items-center z-10 "
          >
            <MdOutlineCancel className="h-full w-full text-white-main" />
          </button>

          <div className="w-full h-full">
            <video
              className="w-full h-full object-cover object-center"
              src="/Assets/About.mp4"
              autoPlay
              height={"100%"}
              width={"100%"}
              controls={false}
              loop
            ></video>
          </div>
        </div>
      </Dialog>
    </ComponentWrapper>
  );
};

export default About;
