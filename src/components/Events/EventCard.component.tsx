import { FunctionComponent } from "react";
import { formatDate } from "../../lib/dateUtils";
import { MyEvent } from "../../lib/Event/interface";
import { getUrlPrefix, Language } from "../../lib/language";
import Link from "next/link";
import { EVENTS } from "../../lib/routes";
import { Spacer } from "../Spacer";

interface EventCardProps extends MyEvent {
  language: Language;
}
export const EventCard: FunctionComponent<EventCardProps> = ({
  language,
  name,
  place,
  date,
  id,
}) => {
  return (
    <Link href={`${getUrlPrefix(language)}${EVENTS}/${id}`}>
      <a
        className="rounded-full bg-white
        border-primary border-solid border
        p-4 lg:p-6 mb-4 lg:mb-8
        cursor-pointer hover:shadow-md transition-all
        flex items-center"
      >
        <div
          className="flex flex-col justify-center items-center
          font-serif text-3xl text-primary"
        >
          <p>{formatDate(date, language, "d")}</p>
          <p className="-mt-2 lg:hidden">{`${formatDate(
            date,
            language,
            "MMM"
          )}.`}</p>
          <p className="hidden lg:block -mt-4">
            {formatDate(date, language, "MMMM")}
          </p>
        </div>
        <Spacer w={4} />
        <div className="flex flex-col justify-center flex-1">
          <p className="text-secondary lg:text-xl font-medium">{name}</p>
          <p className="font-light">{place}</p>
        </div>
      </a>
    </Link>
  );
};
