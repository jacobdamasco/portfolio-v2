import React from "react";
import { IconType } from "react-icons";

interface BtnLinkProps {
  Icon: IconType;
  text: string;
  link?: string;
}

const BtnLink: React.FC<BtnLinkProps> = ({ Icon, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="w-28 flex items-center gap-2 cursor-pointer border-b-2 border-transparent hover:border-green-800 transition"
    >
      <Icon className="w-7 h-7 text-green-800"/>
      <p className="lg:text-lg m-0">{text}</p>
    </a>
  );
};

export default BtnLink;
