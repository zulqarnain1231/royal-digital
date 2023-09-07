import React from "react";

interface Props {
  text: string;
  styles?: string;
}
const SectionHeading: React.FC<Props> = ({
  text,
  styles = "font-extrabold text-white-main",
}) => {
  return (
    <h1
      className={`sm:text-6xl text-4xl text-center relative after:absolute after:w-full after:h-[2px] after:-bottom-2 after:left-0 after:bg-white-main ${styles}`}
    >
      {text}
    </h1>
  );
};

export default SectionHeading;
