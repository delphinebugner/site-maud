import React, { FunctionComponent } from "react";
import { formatDate } from "../../lib/dateUtils";
import { MyEvent } from "../../lib/Event/interface";
import { getUrlPrefix, Language } from "../../lib/LanguageContext";
import Link from "next/link";
import { EVENTS } from "../../lib/routes";

interface EventCardProps extends MyEvent {
  language: Language;
}

export const EventHomeCard: FunctionComponent<EventCardProps> = ({
  name,
  place,
  date,
  language,
  id,
}) => {
  return (
    <Link href={`${getUrlPrefix(language)}${EVENTS}/${id}`}>
      <a
        className="rounded-full h-250 w-250
        border-primary border-solid border bg-white
        p-4 m-4
        cursor-pointer hover:shadow-md transition-all duration-700
        flex items-center justify-center"
      >
        <div className="flex flex-col items-center">
          <p className="font-serif text-2xl text-primary text-center">
            {formatDate(date, language)}
          </p>
          <p className="font-bold text-secondary text-center">{name}</p>
          <p className="font-light text-center">{place}</p>
        </div>
      </a>
    </Link>
  );
};
