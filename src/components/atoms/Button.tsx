import React, { FunctionComponent, useContext } from "react";
import Link from "next/link";
import { getUrlPrefix, LanguageContext } from "../../lib/LanguageContext";
import { cpuUsage } from "process";

interface HomeButtonProps {
  className?: string;
  text: string;
  path?: string;
  color: string;
  onPress?: () => void;
}

export const Button: FunctionComponent<HomeButtonProps> = ({
  className,
  text,
  path,
  color,
  onPress,
}) => {
  const { language } = useContext(LanguageContext);
  const isLink = path !== undefined;

  const style = `${
    className ?? ""
  } border-${color} text-${color} border border-solid pt-2 pb-1 px-8 rounded-full bg-white text-center
  cursor-pointer hover:shadow transition-all duration-700
 text-2xl font-serif`;

  if (isLink) {
    return (
      <Link href={`${getUrlPrefix(language)}${path}`}>
        <a className={style}>{text}</a>
      </Link>
    );
  }
  return (
    <div onClick={onPress} className={style}>
      {text}
    </div>
  );
};
