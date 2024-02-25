import { useContext } from "react";
import { LanguageContext } from "../lib/LanguageContext";

type keys =
  | "goToNextConcert"
  | "goToPastConcert"
  | "displayPreviousPage"
  | "emptyAgenda"
  | "displayNextPage";

const translationsEn: Record<keys, string> = {
  emptyAgenda: "Agenda in progress!",
  goToPastConcert: "Display Past Concerts",
  goToNextConcert: "Display Incoming Concerts",
  displayNextPage: "Next",
  displayPreviousPage: "Previous",
};

const translationsFr: Record<keys, string> = {
  emptyAgenda: "Agenda en construction !",
  goToNextConcert: "Voir les prochains concerts",
  goToPastConcert: "Voir les concerts passés",
  displayNextPage: "Suivant",
  displayPreviousPage: "Précédent",
};

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  return {
    t: language === "fr" ? translationsFr : translationsEn,
  };
};
