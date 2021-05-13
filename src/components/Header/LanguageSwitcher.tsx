import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { EN, FR, Language } from "../../lib/language";

interface Props {
  language: Language;
}

export const LanguageSwitcher: React.FC<Props> = ({ language }) => {
  const { asPath } = useRouter();
  const urlToPageInOtherLanguage =
    language === EN ? "/fr" + asPath : asPath.replace("/fr", "");
  return (
    <Link href={urlToPageInOtherLanguage}>
      <a className="transition-color text-primary active:text-primary-dark hover:text-primary-dark duration-300 ml-7">
        {language === FR ? "English" : "Français"}
      </a>
    </Link>
  );
};
