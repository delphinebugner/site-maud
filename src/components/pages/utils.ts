export const EN = "en";
export const FR = "fr";

export const SECONDARY_LANGUAGE = FR;
export const DEFAULT_LANGUAGE = EN;

export type Language = "en" | "fr";

export const getMainLanguagePath = (page: string) =>
  `../../content/pages/${page}_${DEFAULT_LANGUAGE}.md`;

export const getSecondLanguageContent = (page: string) =>
  `../../../content/pages/${page}_${SECONDARY_LANGUAGE}.md`;
