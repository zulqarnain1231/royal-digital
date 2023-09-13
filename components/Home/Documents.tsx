"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import Img from "../Shared/NextImage/Img";
import { BsDownload } from "react-icons/bs";
import { Fade, Slide } from "react-awesome-reveal";

const Documents = () => {
  return (
    <ComponentWrapper id="documents" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-12">
        <Fade triggerOnce>
          <SectionHeading text="Documents" />
        </Fade>

        <div className="w-full flex flex-col items-center justify-start md:grid md:grid-cols-2 gap-6">
          <Fade
            triggerOnce
            className="w-full md:flex hidden items-center justify-center"
          >
            <Img
              src="/Assets/Documents.png"
              imgContainer="h-[400px] w-full"
              imgStyle="object-contain"
            />
          </Fade>
          <div className="w-full flex flex-col items-center md:justify-center justify-start gap-8">
            <Fade triggerOnce className="w-full ">
              <div className="w-full flex items-center justify-start gap-4">
                <BsDownload className="text-cyan-main text-2xl" />
                <a
                  download={"/Assets/Pdf/Royal-Digital-Wallet.pdf"}
                  href="/"
                  className="text-cyan-main sm:text-2xl text-lg leading-6 font-semibold "
                >
                  Whitepaper
                </a>
              </div>
              <div className="w-full flex items-center justify-start gap-4">
                <BsDownload className="text-cyan-main text-2xl" />
                <a
                  download={"/Assets/Pdf/Royal-Digital-Wallet.pdf"}
                  href="/"
                  className="text-cyan-main sm:text-2xl text-lg leading-6 font-semibold "
                >
                  Token Sale Terms & Conditions
                </a>
              </div>
              <div className="w-full flex items-center justify-start gap-4">
                <BsDownload className="text-cyan-main text-2xl" />
                <a
                  download={"/Assets/Pdf/Royal-Digital-Wallet.pdf"}
                  href="/"
                  className="text-cyan-main sm:text-2xl text-lg leading-6 font-semibold "
                >
                  One Pager
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Documents;
