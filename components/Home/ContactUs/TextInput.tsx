import React from "react";

interface Props {
  type?: string;
  required?: boolean;
  value: string | number;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  name: string;
  placeholder: string;
}
const TextInput: React.FC<Props> = ({
  icon,
  type = "text",
  value,
  required = true,
  setValue,
  placeholder,
  name,
}) => {
  return (
    <div className="w-full h-[46px] relative bg-purple-main rounded-xl">
      <input
        type={type}
        autoComplete="off"
        value={value}
        onChange={setValue}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full h-full rounded-xl bg-transparent border-none focus:outline-none text-white-main text-sm font-medium placeholder:text-white-main sm:px-4 px-3"
      />
      {icon}
    </div>
  );
};

export default TextInput;
