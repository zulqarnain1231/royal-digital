import React from "react";

interface Props {
  text: string;
  styles?: string;
}
const SectionSubHeading: React.FC<Props> = ({
  text,
  styles = "text-white-main/80 text-center",
}) => {
  return (
    <h2
      className={`sm:text-[20px] text-[18px] leading-6 font-light  ${styles}`}
    >
      {text}
    </h2>
  );
};

export default SectionSubHeading;
