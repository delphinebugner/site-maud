import { FunctionComponent } from "react";
import { getEventsByYear } from "../../lib/dateUtils";
import { MyEvent } from "../../lib/Event/interface";
import { Language } from "../../lib/language";
import { EventCardYearList } from "./EventCardYearList.component";

interface EventCardListProps {
  className?: string;
  events: MyEvent[];
  language: Language;
  title: string;
}

export const EventCardSection: FunctionComponent<EventCardListProps> = ({
  className,
  events,
  language,
  title,
}) => {
  const eventsByYear = getEventsByYear(events);
  const allYears = Object.keys(eventsByYear).sort();
  return (
    <div className={`${className ?? ""} flex flex-col mb-4`}>
      <p className="font-serif text-5xl lg:text-6xl text-primary my-4 lg:my-8 self-center">
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
