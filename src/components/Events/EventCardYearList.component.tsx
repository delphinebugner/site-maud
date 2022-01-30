import React, { FunctionComponent } from "react";
import { MyEvent } from "../../lib/Event/interface";
import { EventCard } from "./EventCard.component";
import { Language } from "../../lib/LanguageContext";

interface EventCardListProps {
  className?: string;
  events: MyEvent[];
  language: Language;
  year: string;
}

export const EventCardYearList: FunctionComponent<EventCardListProps> = ({
  className,
  events,
  language,
  year,
}) => {
  // Ne PAS mettre de marge en bas de ce composant pour ne pas briser la ligne entre les années !
  return (
    <div
      className={`${
        className ?? ""
      } flex w-full px-4 lg:pl-48 lg:pr-72 flex-col lg:flex-row`}
    >
      <span
        className="text-3xl font-bold text-secondary 
        border-r border-white lg:border-secondary border-solid
        pb-4 lg:mt-4 lg:-mr-16 lg:pr-24 lg:py-4"
      >
        {year}
      </span>
      <div className="flex flex-col flex-1">
        {events.map((event, i) => (
          <EventCard {...event} key={i} language={language} />
        ))}
      </div>
    </div>
  );
};
