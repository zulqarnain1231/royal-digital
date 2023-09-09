"use client";
import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Timer from "@/components/Shared/Timer";

const Hero = () => {
  return (
    <ComponentWrapper style="w-full h-[calc(100vh-140px)] flex flex-col items-center justify-center">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-center">
          Crypto Wallet of the future!
        </h1>
        <h2 className="sm:text-[20px] text-[18px] text-white-main/80 font-light text-center mt-4 mb-8">
          an advanced crypto wallet for all your assets in one place.
        </h2>
        <Timer date="2023-08-30" />
        <div className="flex justify-center items-center gap-4 mt-8">
          <button className="glow-on-hover w-[170px] h-[50px]" type="button">
            Presale
          </button>
          <button className="glow-on-hover w-[170px] h-[50px]" type="button">
            RWD Token
          </button>
        </div>
      </section>
    </ComponentWrapper>
  );
};

export default Hero;
