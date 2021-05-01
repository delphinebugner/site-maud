export const SECONDARY_LANGUAGE = "fr";
export const DEFAULT_LANGUAGE = "en";

export const getMainLanguagePath = (page: string) =>
  `../../content/pages/${page}_${DEFAULT_LANGUAGE}.md`;

export const getSecondLanguageContent = (page: string) =>
  `../../../content/pages/${page}_${SECONDARY_LANGUAGE}.md`;
