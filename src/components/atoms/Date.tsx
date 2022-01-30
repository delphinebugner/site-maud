import { format, formatISO } from "date-fns";
import React from "react";
import { EN, Language } from "../../lib/LanguageContext";
import { enGB, fr } from "date-fns/locale";

type Props = {
  date: Date | string;
  language: Language;
};
export const DateComponent: React.FC<Props> = ({ date, language }) => {
  const realDate = typeof date === "string" ? new Date(date) : date;
  const locale: Locale = language === EN ? enGB : fr;
  const realFormat = language === EN ? "LLLL d, yyyy" : "d LLLL yyyy";
  return (
    <time dateTime={formatISO(realDate)}>
      <span className="text-sand">
        {format(realDate, realFormat, { locale })}
      </span>
    </time>
  );
};
