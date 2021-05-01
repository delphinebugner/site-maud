import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { EN, FR, Language } from "./pages/utils";

interface Props {
  language: Language;
}

export const LanguageSwitcher: React.FC<Props> = ({ language }) => {
  const { pathname } = useRouter();
  const urlToPageInOtherLanguage =
    language === EN ? "/fr" + pathname : pathname.replace("/fr", "");
  return (
    <Link href={urlToPageInOtherLanguage}>
      <a>{language === FR ? "English" : "Français"}</a>
    </Link>
  );
};
