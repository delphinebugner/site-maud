import React, { FunctionComponent } from "react";
import { MyEvent } from "../../lib/Event/interface";
import { Language } from "../../lib/LanguageContext";
import { useTranslation } from "../../translations/useTranslations";
import { Button } from "../atoms/Button";
import { EventCardYearList } from "./EventCardYearList.component";
import { useEventCardPaginated } from "./hooks/useEventCardPaginated";

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

  const {
    allYears,
    eventsByYear,
    displayNextBatch,
    displayPreviousBatch,
    paginationLabel,
  } = useEventCardPaginated(events, isInThePast);

  return (
    <div className="flex flex-col mb-4">
      <p className="font-serif text-4xl lg:text-6xl text-primary my-4 lg:my-8 self-center">
        {title}
      </p>
      {!isInThePast && events.length === 0 && (
        <p className="text-secondary lg:text-xl font-medium text-center py-40">
          {t.emptyAgenda}
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
      <div className="flex flex-col lg:flex-row items-center justify-center py-8">
        <Button
          text={`< ${t.displayPreviousPage}`}
          color="secondary"
          onPress={displayPreviousBatch}
          className="w-60 lg:mx-4 mb-4 lg:mb-0"
          disabled={!displayPreviousBatch}
        />
        <Button
          text={`${t.displayNextPage} >`}
          color="secondary"
          onPress={displayNextBatch}
          className="w-60"
          disabled={!displayNextBatch}
        />
      </div>
      <p className="text-center text-secondary">{paginationLabel}</p>
    </div>
  );
};
