"use client";
import React, { useState, useEffect } from "react";
import Img from "./NextImage/Img";
import ComponentWrapper from "./Wrappers/ComponentWrapper";
import Link from "next/link";
import { Link as Scrolling } from "react-scroll";
import { Drawer } from "@mui/material";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [Show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBackground, setNavBackground] = useState<boolean>(false);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(false);
        setNavBackground(false);
      } else {
        setShow(true);
        setNavBackground(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  const menu = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Our Team",
      route: "ourteam",
    },
    {
      name: "RoadMap",
      route: "roadmap",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Contact Us",
      route: "contact",
    },
  ];
  return (
    <nav
      className={`w-full h-[140px] sticky top-0 z-50 ${
        Show && "md:-top-[140px]"
      }  transition-all duration-1000`}
    >
      <ComponentWrapper style="w-full h-full">
        <div className="w-full h-full flex items-center justify-between">
          <Img
            imgContainer="w-[100px] h-[100px]"
            src="/logo.png"
            imgStyle="object-contain"
          />
          <div className="h-full md:flex hidden items-center justify-center gap-8">
            {menu.map((item: any, index: number) => {
              return (
                <Scrolling
                  key={index}
                  activeClass="active"
                  to={item.route}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  className="text-white-main text-base font-normal relative z-[100] hover:after:z-0 after:absolute after:w-full after:bottom-0 after:left-0 after:h-0 hover:after:h-[3px] after:rounded-bl-full after:rounded-br-full after:bg-gradient-to-r from-brand-primary to-brand-secondary after:transition-all after:duration-300 transition-all duration-300 cursor-pointer"
                >
                  {" "}
                  {item.name}
                </Scrolling>
              );
            })}
          </div>
          <RiMenu3Line
            onClick={toggleDrawer}
            className="h-[24px] w-[24px] md:hidden inline-block text-white-main"
          />
        </div>
      </ComponentWrapper>
      {/* for mobile screens */}
      <Drawer
        anchor={"left"}
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiPaper-root": {
            height: "100vh",
            width: "100%",
            background: "rgba(44, 50, 65, 1)",
          },
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-[50px] relative">
          <div className="w-[36px] h-[36px] flex items-center justify-center bg-red-500 rounded-full absolute right-4 top-4">
            <RxCross1
              onClick={toggleDrawer}
              className="text-white-main h-[20px] w-[20px]"
            />
          </div>

          {menu.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                onClick={toggleDrawer}
                href={item.route}
                className="text-white-main text-base font-medium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2.5px] after:bg-gradient-to-r from-brand-primary to-brand-secondary hover:after:w-full after:transition-all after:duration-300 transition-all duration-300"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navigation;
