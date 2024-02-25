import { useMemo, useState } from "react";
import {
  getEventsByYear,
  orderEventsByYearInThePast,
} from "../../../lib/dateUtils";
import { MyEvent } from "../../../lib/Event/interface";
import { scrollToTop } from "../../../lib/windowUtils";

const EVENTS_PER_PAGE = 10;

export const useEventCardPaginated = (
  events: MyEvent[],
  isInThePast: boolean
) => {
  const [currentBatch, setCurrentBatch] = useState(0);
  const { eventsByYear, allYears } = useMemo(() => {
    const orderedEvents = isInThePast
      ? orderEventsByYearInThePast(events)
      : events;

    const displayedEvents = orderedEvents.slice(
      currentBatch * EVENTS_PER_PAGE,
      (currentBatch + 1) * EVENTS_PER_PAGE
    );

    const eventsByYear = getEventsByYear(displayedEvents);
    const allYears = Object.keys(eventsByYear).sort();
    if (isInThePast) {
      allYears.reverse();
    }
    return { eventsByYear, allYears };
  }, [events, currentBatch, isInThePast]);

  const nbOfBatch = Math.ceil(events.length / EVENTS_PER_PAGE);

  const displayNextBatch =
    currentBatch < nbOfBatch - 1
      ? () => {
          scrollToTop();
          setCurrentBatch(currentBatch + 1);
        }
      : undefined;

  const displayPreviousBatch =
    currentBatch > 0
      ? () => {
          scrollToTop();
          setCurrentBatch(currentBatch - 1);
        }
      : undefined;

  const paginationLabel = `Page ${currentBatch + 1} / ${nbOfBatch}`;

  return {
    eventsByYear,
    allYears,
    displayNextBatch,
    displayPreviousBatch,
    paginationLabel,
  };
};
