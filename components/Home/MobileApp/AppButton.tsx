import React from "react";
import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  text: string;
  link: string;
  style?: string;
}
const AppButton: React.FC<Props> = ({
  icon,
  text,
  link,
  style = "h-[60px] w-[250px]",
}) => {
  return (
    <Link
      href={"/"}
      className={`flex items-center justify-center gap-4 rounded-[28px] bg-black-main text-sm text-white-main font-medium glowing relative ${style}`}
    >
      {icon}
      <span className="flex flex-col items-start justify-start">
        Get It On{" "}
        <span className="font-semibold text-lg text-white-main">{text}</span>
      </span>
    </Link>
  );
};

export default AppButton;
