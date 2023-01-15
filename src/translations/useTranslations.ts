import { useContext } from "react";
import { LanguageContext } from "../lib/LanguageContext";

type keys = "goToNextConcert" | "goToPastConcert";

const translationsEn: Record<keys, string> = {
  goToPastConcert: "Display Past Concerts",
  goToNextConcert: "Display Future Concerts",
};

const translationsFr: Record<keys, string> = {
  goToNextConcert: "Voir les prochains concerts",
  goToPastConcert: "Voir les concerts passés",
};

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  return {
    t: language === "fr" ? translationsFr : translationsEn,
  };
};
