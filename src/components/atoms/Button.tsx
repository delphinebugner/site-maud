import React, { FunctionComponent } from "react";
import Link from "next/link";
import { getUrlPrefix, Language } from "../../lib/LanguageContext";

interface HomeButtonProps {
  className?: string;
  text: string;
  language: Language;
  path: string;
  color: string;
}

export const Button: FunctionComponent<HomeButtonProps> = ({
  className,
  language,
  text,
  path,
  color,
}) => {
  return (
    <Link href={`${getUrlPrefix(language)}${path}`}>
      <a
        className={`${
          className ?? ""
        } border-${color} text-${color} border border-solid pt-2 pb-1 px-8 rounded-full bg-white
        cursor-pointer hover:shadow transition-all duration-700
       text-2xl font-serif`}
      >
        {text}
      </a>
    </Link>
  );
};
