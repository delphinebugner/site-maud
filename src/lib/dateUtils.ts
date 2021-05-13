import { format } from "date-fns";
import { EN, Language } from "../lib/language";
import { enGB, fr } from "date-fns/locale";

export const formatDate = (
  date: string,
  language: Language,
  formate?: string
) => {
  const realDate = new Date(date);
  const locale: Locale = language === EN ? enGB : fr;
  const realFormat =
    formate ?? (language === EN ? "LLLL d, yyyy" : "d LLLL yyyy");
  return format(realDate, realFormat, { locale });
};
