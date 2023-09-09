import React from "react";
import ComponentWrapper from "./Wrappers/ComponentWrapper";
import Img from "./NextImage/Img";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,dfsdf
  FaSlackHash,
} from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import SocailIcon from "./SocailIcon";

const Footer = () => {
  const socialIcons = [
    { icon: <BsTwitter className="text-black-main text-xl" /> },
    { icon: <FaFacebookF className="text-black-main text-xl" /> },
    { icon: <FaLinkedinIn className="text-black-main text-xl" /> },
    { icon: <FaTelegramPlane className="text-black-main text-xl" /> },
    { icon: <FaSlackHash className="text-black-main text-xl" /> },
    { icon: <BiLogoInstagramAlt className="text-black-main text-xl" /> },
    { icon: <BsYoutube className="text-black-main text-xl" /> },
  ];
  return (
    <footer className="w-full bg-purple-main">
      <ComponentWrapper id="footer" style="w-full py-6">
        <div className="w-full flex flex-col items-center justify-start gap-6">
          <Img
            src="/logo.png"
            imgContainer="h-[70px] w-[70px]"
            imgStyle="object-contain"
          />
          <div className="w-full flex items-center justify-center gap-4">
            <p className="text-white-main text-sm font-normal">Support </p>
            <p className="text-white-main text-sm font-normal">Sign up</p>
            <p className="text-white-main text-sm font-normal">Login</p>
            <p className="text-white-main text-sm font-normal">Privacy</p>
            <p className="text-white-main text-sm font-normal">Policy</p>
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            {socialIcons.map((item: any, index: number) => (
              <SocailIcon key={index} icon={item.icon} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-white-main text-sm text-center font-normal">
              Copyright © Royal Digital 2023. All rights reserved.
            </p>
          </div>
        </div>
      </ComponentWrapper>
    </footer>
  );
};

export default Footer;
