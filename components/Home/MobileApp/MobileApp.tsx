"use client";
import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import Img from "../../Shared/NextImage/Img";
import SectionHeading from "../../Shared/Typography/SectionHeading";
import SectionSubHeading from "../../Shared/Typography/SectionSubHeading";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiFillApple } from "react-icons/ai";
import Link from "next/link";
import AppButton from "./AppButton";
import { Fade, Slide } from "react-awesome-reveal";

const MobileApp = () => {
  return (
    <ComponentWrapper style="py-20" id="mobileApp">
      <div className="w-full grid lg:grid-cols-2 gap-4">
        <Fade triggerOnce className="w-full h-full md:inline-block hidden">
          <Img
            src="/Assets/MobileApp.png"
            imgContainer="h-[500px] w-full"
            imgStyle="object-contain"
          />
        </Fade>
        <div className="w-full flex flex-col lg:items-start items-center justify-start gap-10">
          <Fade
            triggerOnce
            className="w-full flex flex-col lg:items-start items-center justify-start gap-10"
          >
            <SectionHeading text="Mobile app" />
            <p className="text-cyan-main sm:text-2xl text-lg lg:text-left text-center font-light">
              {" "}
              A mobile app with global connectivity. Send money across the world
              and exchange currencies.
            </p>
            <div className="w-full flex sm:flex-row flex-col items-center justify-center lg:justify-start gap-6">
              <AppButton
                icon={
                  <IoLogoGooglePlaystore className="text-white-main text-3xl flex-shrink-0" />
                }
                text="Google Play"
                link="https://play.google.com/store/apps/details?id=com.royaldigital.wallet&pli=1"
              />
              <AppButton
                icon={
                  <AiFillApple className="text-white-main text-4xl flex-shrink-0" />
                }
                text="App Store"
                link="https://play.google.com/store/apps/details?id=com.royaldigital.wallet&pli=1"
              />
            </div>
          </Fade>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default MobileApp;
