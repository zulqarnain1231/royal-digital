"use client";
import React, { useState } from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../../Shared/Typography/SectionHeading";
import Img from "../../Shared/NextImage/Img";
import { BsFillPersonFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import TextInput from "./TextInput";
import { Fade, Slide } from "react-awesome-reveal";
const ContactUs = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    messege: "",
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <ComponentWrapper id="contact" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-12 ">
        <Fade triggerOnce>
          <SectionHeading text="Contact Us" />
        </Fade>

        <div className="w-full grid lg:grid-cols-2 lg:gap-4 gap-8">
          <Fade
            triggerOnce
            className="w-full flex items-center justify-center"
          >
            <Img
              src="/Assets/contactus.svg"
              imgContainer="w-full  h-[400px]"
              imgStyle="object-contain"
            />
          </Fade>
          <Fade triggerOnce>
            <form
              onSubmit={handleSubmit}
              action=""
              className="w-full flex flex-col items-center justify-start gap-6"
            >
              <TextInput
                value={inputs.name}
                name="name"
                placeholder="Enter Your Name"
                setValue={handleInputs}
                icon={
                  <BsFillPersonFill className="text-white-main text-xl absolute top-3 right-4 z-10" />
                }
              />
              <TextInput
                value={inputs.email}
                name="email"
                type="email"
                placeholder="Enter Your Email"
                setValue={handleInputs}
                icon={
                  <TbMailFilled className="text-white-main text-xl absolute top-3 right-4 z-10" />
                }
              />
              <textarea
                placeholder="Enter Your Messege here"
                name="messege"
                value={inputs.messege}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  const { value } = e.target;
                  setInputs({ ...inputs, messege: value });
                }}
                id=""
                cols={30}
                rows={10}
                required
                className="max-h-[250px] min-h-[250px] w-full bg-purple-main text-white-main text-sm font-medium placeholder:text-white-main rounded-xl border-none outline-none focus:outline-none sm:p-4 p-3"
              ></textarea>
              <button
                type="submit"
                className="h-[50px] px-6 text-white-main font-semibold text-base rounded-[28px] bg-gradient-to-tr from-brand-secondary to-brand-primary"
              >
                Submit Messege
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default ContactUs;
