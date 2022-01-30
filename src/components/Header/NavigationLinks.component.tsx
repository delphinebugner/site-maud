import { FunctionComponent } from "react";
import { EN, Language } from "../../lib/LanguageContext";
import { ABOUT, RESEARCH, EVENTS, HOME } from "../../lib/routes";
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
    <div className={`${className} text-2xl font-serif`}>
      <NavigationLink
        path={HOME}
        label={language === EN ? "Home" : "Accueil"}
      />
      <NavigationLink
        path={ABOUT}
        label={language === EN ? "Biography" : "Biographie"}
      />
      <NavigationLink path={EVENTS} label={"Agenda"} />
      <NavigationLink
        path={RESEARCH}
        label={language === EN ? "Research" : "Recherche"}
      />
      {isTranslationAvailable && <LanguageSwitcher />}
    </div>
  );
};
