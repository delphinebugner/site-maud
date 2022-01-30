import React, { FunctionComponent } from "react";
import { formatDate } from "../../lib/dateUtils";
import { MyEvent } from "../../lib/Event/interface";
import { getUrlPrefix, Language } from "../../lib/LanguageContext";
import Link from "next/link";
import { EVENTS } from "../../lib/routes";

interface EventCardProps extends MyEvent {
  language: Language;
}
export const EventCard: FunctionComponent<EventCardProps> = ({
  language,
  name,
  place,
  date,
  hour,
  id,
}) => {
  return (
    <Link href={`${getUrlPrefix(language)}${EVENTS}/${id}`}>
      <a
        className="rounded-full bg-white w-full
        border-primary border-solid border
        p-4 lg:p-6 mb-4 lg:mb-8
        cursor-pointer hover:shadow-md transition-all
        flex items-center"
      >
        <div
          className="flex flex-col justify-center items-center
          font-serif text-2xl lg:text-3xl text-primary mr-4"
        >
          <p>{formatDate(date, language, "d")}</p>
          <p className="-mt-2 lg:hidden">{`${formatDate(
            date,
            language,
            "MMM"
          )}.`}</p>
          <p className="hidden lg:block -mt-2">
            {formatDate(date, language, "MMMM")}
          </p>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <p className="text-secondary lg:text-xl font-medium">{name}</p>
          <div className="flex items-center">
            <p className="font-light">{place}</p>
            {hour && (
              <>
                <p className="mx-1 text-primary">-</p>
                <p className="font-light text-sand mr-2">{hour}</p>
              </>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};
