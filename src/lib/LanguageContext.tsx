import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const EN = "en";
export const FR = "fr";

export const SECONDARY_LANGUAGE = FR;
export const DEFAULT_LANGUAGE = EN;

export type Language = "en" | "fr";

export const getUrlPrefix = (language: Language) =>
  language === FR ? "/" + FR : "";

interface LanguageContextType {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {
    // do nothing
  },
});

export const LanguageProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
