import { format } from "date-fns";
import { EN, Language } from "./LanguageContext";
import { enGB, fr } from "date-fns/locale";
import { MyEvent } from "./Event/interface";

export const formatDate = (
  date: string,
  language: Language,
  formate?: string
) => {
  const realDate = new Date(date);
  const locale: Locale = language === EN ? enGB : fr;
  const realFormat =
    formate ?? (language === EN ? "LLLL d, yyyy" : "d LLLL yyyy");
  return format(realDate, realFormat, { locale });
};

export const isEventPast = (event: MyEvent): boolean => {
  const { date } = event;
  const realDateToTest = new Date(date);
  const now = new Date();
  return realDateToTest.getTime() < now.getTime();
};

const getYear = (event: MyEvent): string => event.date.split("-")[0];

export const getEventsByYear = (
  events: MyEvent[]
): Record<string, MyEvent[]> => {
  return events.reduce<Record<string, MyEvent[]>>(
    (eventsByYear, currentEvent) => {
      const yearEvent = getYear(currentEvent);
      const currentEventsAssociated = eventsByYear[yearEvent];
      if (currentEventsAssociated) {
        eventsByYear[yearEvent] = [...currentEventsAssociated, currentEvent];
      } else {
        eventsByYear[yearEvent] = [currentEvent];
      }
      return eventsByYear;
    },
    {}
  );
};
