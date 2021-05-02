export const EN = "en";
export const FR = "fr";

export const SECONDARY_LANGUAGE = FR;
export const DEFAULT_LANGUAGE = EN;

export type Language = "en" | "fr";

export const getUrlPrefix = (language: Language) =>
  language === FR ? "/" + FR : "";
