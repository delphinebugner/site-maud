import React, { FunctionComponent, useMemo, useState } from "react";
import { getEventsByYear } from "../../lib/dateUtils";
import { MyEvent } from "../../lib/Event/interface";
import { Language } from "../../lib/LanguageContext";
import { useTranslation } from "../../translations/useTranslations";
import { Button } from "../atoms/Button";
import { Spacer } from "../atoms/Spacer";
import { EventCardYearList } from "./EventCardYearList.component";

const EVENTS_PER_PAGE = 10;

interface EventCardListProps {
  events: MyEvent[];
  isInThePast?: boolean;
  language: Language;
  title: string;
}

export const EventCardSection: FunctionComponent<EventCardListProps> = ({
  events,
  language,
  title,
  isInThePast = false,
}) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const displayedEvents = useMemo(() => {
    if (isInThePast) {
      events.reverse();
    }
    return events.slice(
      currentPage * EVENTS_PER_PAGE,
      (currentPage + 1) * EVENTS_PER_PAGE
    );
  }, [events, currentPage]);

  const eventsByYear = getEventsByYear(displayedEvents);
  const allYears = Object.keys(eventsByYear).sort();
  if (isInThePast) {
    allYears.reverse();
  }

  return (
    <div className="flex flex-col mb-4">
      <p className="font-serif text-4xl lg:text-6xl text-primary my-4 lg:my-8 self-center">
        {title}
      </p>
      {!isInThePast && events.length === 0 && (
        <p className="text-secondary lg:text-xl font-medium text-center py-40">
          {language === "en"
            ? "Agenda in progress!"
            : "Agenda en construction !"}
        </p>
      )}
      {allYears.map((year, i) => (
        <EventCardYearList
          year={year}
          key={i}
          events={eventsByYear[year]}
          language={language}
        />
      ))}
      <div className="flex justify-center py-8">
        <Button
          text={t.displayPreviousPage}
          color="secondary"
          onPress={() => setCurrentPage((preivousPage) => preivousPage - 1)}
          className="w-60"
        />
        <Spacer w={4} />
        <Button
          text={t.displayNextPage}
          color="secondary"
          onPress={() => setCurrentPage((preivousPage) => preivousPage + 1)}
          className="w-60"
        />
      </div>
    </div>
  );
};
