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
        className={`${
          className ?? ""
        } border-${color} text-${color} border-solid border pt-2 pb-1 px-8 rounded-full
        cursor-pointer hover:shadow hover:opacity-80 transition-all
       font-serif text-3xl`}
      >
        {text}
      </a>
    </Link>
  );
};
