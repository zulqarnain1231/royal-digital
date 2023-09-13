import Hero from "@/components/Home/Hero/Hero";
import Footer from "@/components/Shared/Footer";
import Navigation from "@/components/Shared/Navigation";
import { Fragment } from "react";
import Sponsors from "../components/Home/Sponsors";
import LaunchingIn from "@/components/Home/LaunchingIn";
import About from "@/components/Home/About/About";
import Steps from "@/components/Home/Steps/Steps";
import WhatIsRoyalDigital from "@/components/Home/WhatIsRoyalDigital";
import MobileApp from "@/components/Home/MobileApp/MobileApp";
import RoadMap from "@/components/Home/RoadMap/RoadMap";
import NewsLetter from "@/components/Home/NewsLetter";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Documents from "@/components/Home/Documents";

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Sponsors />
      <LaunchingIn />
      <About />
      <Steps />
      <WhatIsRoyalDigital />
      <MobileApp />
      <RoadMap />
      <NewsLetter />
      <Documents />
      <ContactUs />
      <Footer />
    </Fragment>
  );
}
