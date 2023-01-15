import { useContext } from "react";
import { LanguageContext } from "../lib/LanguageContext";

type keys =
  | "goToNextConcert"
  | "goToPastConcert"
  | "displayPreviousPage"
  | "displayNextPage";

const translationsEn: Record<keys, string> = {
  goToPastConcert: "Display Past Concerts",
  goToNextConcert: "Display Incoming Concerts",
  displayNextPage: "Next >",
  displayPreviousPage: "< Previous",
};

const translationsFr: Record<keys, string> = {
  goToNextConcert: "Voir les prochains concerts",
  goToPastConcert: "Voir les concerts passés",
  displayNextPage: "Suivant >",
  displayPreviousPage: "< Précédent",
};

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  return {
    t: language === "fr" ? translationsFr : translationsEn,
  };
};
