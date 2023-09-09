import React from "react";
import Marquee from "react-fast-marquee";
import Data from "../../constants/Data/Static.json";
import Link from "next/link";
import Img from "@/components/Shared/NextImage/Img";
const Sponsors = () => {
  const { Sponsors } = Data;
  return (
    <section className="w-full py-4">
      <Marquee className="w-full h-full" pauseOnHover>
        {Sponsors.map((item: any, index: number) => {
          return (
            <Link href={item.route} key={index}>
              <Img
                src={item.image}
                imgContainer="sm:h-[180px] h-[150px] sm:w-[200px] w-[170px]"
                imgStyle="object-fill"
              />
            </Link>
          );
        })}
      </Marquee>
    </section>
  );
};

export default Sponsors;
