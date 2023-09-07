import React from "react";

interface Props {
  icon: React.ReactNode;
}

const SocailIcon: React.FC<Props> = ({ icon }: Props) => {
  return (
    <span className="h-[36px] w-[36px] flex items-center justify-center rounded-full bg-white-main cursor-pointer hover:bg-brand-secondary">
      {icon}
    </span>
  );
};

export default SocailIcon;
