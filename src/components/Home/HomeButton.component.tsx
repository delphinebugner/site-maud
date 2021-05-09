import { FunctionComponent } from "react";
import Link from "next/link";
import { getUrlPrefix, Language } from "../../lib/language";

interface HomeButtonProps {
  className?: string;
  text: string;
  language: Language;
  path: string;
  color: string;
}

export const HomeButton: FunctionComponent<HomeButtonProps> = ({
  className,
  language,
  text,
  path,
  color,
}) => {
  return (
    <Link href={`${getUrlPrefix(language)}${path}`}>
      <a
        className={`${className} border py-2 px-4 border-solid border-${color}-light rounded-lg 
        cursor-pointer hover:border-${color} transition-all duration-500
        text-${color}`}
      >
        {text}
      </a>
    </Link>
  );
};
