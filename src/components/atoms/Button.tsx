import React, { FunctionComponent, useContext } from "react";
import Link from "next/link";
import { getUrlPrefix, LanguageContext } from "../../lib/LanguageContext";

interface HomeButtonProps {
  className?: string;
  text: string;
  path?: string;
  color: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const Button: FunctionComponent<HomeButtonProps> = ({
  className,
  text,
  path,
  color,
  onPress,
  disabled = false,
}) => {
  const { language } = useContext(LanguageContext);
  const isLink = path !== undefined;

  const buttonColor = disabled ? "sand" : color;
  const cursor = disabled ? "cursor-default" : "cursor-pointer";
  const hover = disabled ? "" : "hover:shadow transition-all duration-500";

  const style = `${
    className ?? ""
  } border-${buttonColor} text-${buttonColor} border border-solid pt-2 pb-1 px-8 rounded-full bg-white text-center
  ${cursor} ${hover}
 text-2xl font-serif`;

  if (disabled) {
    return <div className={style}>{text}</div>;
  }

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
