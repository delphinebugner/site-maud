import { FunctionComponent } from "react";
import { EN, Language } from "../../lib/language";
import { ABOUT, ARTICLES, EVENTS, HOME } from "../../lib/routes";
import { NavigationLink } from "./NavigationLink.component";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavigationLinksProps {
  className?: string;
  language: Language;
  isTranslationAvailable: boolean;
}

export const NavigationLinks: FunctionComponent<NavigationLinksProps> = ({
  className,
  language,
  isTranslationAvailable,
}) => {
  return (
    <div className={`${className}`}>
      {" "}
      <NavigationLink
        path={HOME}
        label={language === EN ? "Home" : "Accueil"}
        language={language}
      />
      <NavigationLink
        path={ABOUT}
        label={language === EN ? "About" : "A propos"}
        language={language}
      />
      <NavigationLink path={EVENTS} label={"Concerts"} language={language} />
      <NavigationLink path={ARTICLES} label={"Articles"} language={language} />
      {isTranslationAvailable && <LanguageSwitcher language={language} />}
    </div>
  );
};
