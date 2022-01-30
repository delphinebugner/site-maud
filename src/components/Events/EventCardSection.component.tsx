import React, { FunctionComponent } from "react";
import { getEventsByYear } from "../../lib/dateUtils";
import { MyEvent } from "../../lib/Event/interface";
import { Language } from "../../lib/LanguageContext";
import { EventCardYearList } from "./EventCardYearList.component";

interface EventCardListProps {
  events: MyEvent[];
  inThePast?: boolean;
  language: Language;
  title: string;
}

export const EventCardSection: FunctionComponent<EventCardListProps> = ({
  events,
  language,
  title,
  inThePast = false,
}) => {
  if (inThePast) {
    events.reverse();
  }
  const eventsByYear = getEventsByYear(events);

  const allYears = Object.keys(eventsByYear).sort();
  if (inThePast) {
    allYears.reverse();
  }
  return (
    <div className="flex flex-col mb-4">
      <p className="font-serif text-4xl lg:text-6xl text-primary my-4 lg:my-8 self-center">
        {title}
      </p>
      {allYears.map((year, i) => (
        <EventCardYearList
          year={year}
          key={i}
          events={eventsByYear[year]}
          language={language}
        />
      ))}
    </div>
  );
};
