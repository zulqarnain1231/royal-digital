"use client";
import Img from "@/components/Shared/NextImage/Img";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import SectionSubHeading from "@/components/Shared/Typography/SectionSubHeading";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Steps = () => {
  return (
    <ComponentWrapper id="steps" style="lg:py-16 py-10">
      <div className="w-full  flex flex-col items-center justify-start gap-12">
        <Fade triggerOnce>
          <SectionHeading text="How It Works" />
        </Fade>

        <div className="w-full h-full flex flex-col items-center justify-start gap-6">
          {/* first step */}
          <div className="w-full flex md:flex-row flex-col md:justify-between justify-start items-center gap-6">
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <Fade
                triggerOnce
                className="w-full flex flex-col items-start justify-start gap-4"
              >
                <div className="w-full flex items-center justify-start">
                  <h1 className="text-white-main/30 text-7xl font-bold -mr-3">
                    01
                  </h1>
                  <h1
                    className={`sm:text-4xl text-3xl text-[#00ECE2] font-bold z-10`}
                  >
                    Sign Up In AIRDROP
                  </h1>
                </div>

                <SectionSubHeading text="Register on Royal Digital AIRDROP" />
              </Fade>
            </div>
            <Fade triggerOnce className="w-full h-full md:inline-block hidden">
              <Img
                src="/Assets/Steps/1.png"
                imgContainer="md:h-[450px] h-[300px] w-full"
                imgStyle="object-contain"
              />
            </Fade>
          </div>
          {/* second step */}
          <div className="w-full flex md:flex-row flex-col-reverse md:justify-between justify-start items-center gap-6">
            <Fade triggerOnce className="w-full h-full md:inline-block hidden">
              <Img
                src="/Assets/Steps/2.png"
                imgContainer="md:h-[450px] h-[300px] w-full"
                imgStyle="object-contain"
              />
            </Fade>
            <div className="w-full">
              <Fade
                triggerOnce
                className="w-full flex flex-col items-start justify-start gap-4"
              >
                <div className="w-full flex items-center justify-start">
                  <h1 className="-mr-3 text-white-main/30 text-7xl font-bold">
                    02
                  </h1>
                  <h1
                    className={`sm:text-4xl text-3xl text-[#00ECE2]  font-bold z-10`}
                  >
                    Do Tasks
                  </h1>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-3">
                  <SectionSubHeading text="1) Download the Wallet app." />
                  <SectionSubHeading text="2) Leave a 5 star review." />
                  <SectionSubHeading text="3) Get at least $20 tokens." />
                  <SectionSubHeading text="4) Recommend to your friend." />
                  <SectionSubHeading text="5) Interact on social media accounts," />
                </div>
              </Fade>
            </div>
          </div>
          {/* third step */}
          <div className="w-full flex md:flex-row flex-col md:justify-between justify-start items-center gap-6">
            <div className="w-full">
              <Fade
                triggerOnce
                className="w-full flex flex-col items-start justify-start gap-2"
              >
                <div className="w-full flex items-center justify-start">
                  <h1 className="text-white-main/30 text-7xl font-bold -mr-3">
                    03
                  </h1>
                  <h1
                    className={`sm:text-4xl text-3xl text-[#00ECE2] font-bold z-10`}
                  >
                    Get Rewarded
                  </h1>
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-3">
                  <SectionSubHeading
                    styles="text-white-main md:text-left text:center"
                    text="Earnings:"
                  />
                  <SectionSubHeading
                    styles="text-white-main md:text-left text:center"
                    text="1) Win RDW Token pool lottery of $1,250,000 for every $20 token purchase."
                  />
                  <SectionSubHeading
                    styles="text-white-main md:text-left text:center"
                    text="2) A gift of tokens equal to 5% of what each referral receives."
                  />
                </div>
              </Fade>
            </div>

            <Fade triggerOnce className="w-full h-full md:inline-block hidden">
              <Img
                src="/Assets/Steps/3.png"
                imgContainer="md:h-[450px] h-[300px] w-full"
                imgStyle="object-contain"
              />
            </Fade>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Steps;
