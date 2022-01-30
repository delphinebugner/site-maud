import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { EN, FR, LanguageContext } from "../../lib/LanguageContext";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { asPath } = useRouter();
  const newLanguage = language === EN ? FR : EN;
  const urlToPageInOtherLanguage =
    newLanguage === FR ? "/fr" + asPath : asPath.replace("/fr", "");
  return (
    <Link href={urlToPageInOtherLanguage || "/"}>
      <a
        className="ml-7 text-primary-dark hover:text-primary transition-color duration-300"
        onClick={() => setLanguage(newLanguage)}
      >
        {language === FR ? "English" : "Français"}
      </a>
    </Link>
  );
};
