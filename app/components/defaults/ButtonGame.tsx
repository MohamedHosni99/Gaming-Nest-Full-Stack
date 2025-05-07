"use client";

import { ReactElement } from "react";
import ButtonSvg from "../ButtonSvg";
import Spinner from "./Spinner";
import Link from "next/link";

const ButtonGame = ({
  className,
  onClick,
  link,
  text,
  icon,
  disabled = false,
}: {
  className?: string;
  onClick?: () => void;
  link?: string;
  text?: string;
  icon?: ReactElement;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={() => {
        onClick && onClick();
      }}
      className={`${className || ""} relative w-full sm:w-auto px-6 flex items-center justify-center gap-2 py-2 text-center text-white hover:text-rose-400 duration-150 cursor-pointer`}
    >
      {ButtonSvg(false)}
      <span className="relative block text-sm sm:text-base text-center w-full">
        {disabled ? <Spinner /> : link ? <Link href={link}>{text}</Link> : text}
      </span>
      {icon && icon}
    </button>
  );
};

export default ButtonGame;
