import fs from "fs";
import path from "path";
import { fetchMdx } from "../fetchUtils";
import { getUrlPrefix, Language } from "../LanguageContext";
import { EVENTS } from "../routes";
import { adaptRawEvent } from "./adapter";
import { MyEvent, RawEvent } from "./interface";

const contentRoot = path.join(process.cwd(), "content/events");

const eventsCache: Partial<Record<Language, MyEvent[]>> = {};

// This function can only be executed on the server side
export const fetchEvents = (language: Language): MyEvent[] => {
  if (eventsCache[language]) {
    return eventsCache[language];
  }
  const eventFileNames = fs.readdirSync(contentRoot);
  const events = eventFileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(contentRoot, fileName);
      const rawEvent = fetchMdx(fullPath) as RawEvent;
      // Validate id string
      const id = fileName.replace(/\.md$/, "");
      if (rawEvent.id !== id) {
        return adaptRawEvent({ ...rawEvent, id }, language);
      }
      return adaptRawEvent(rawEvent, language);
    });
  const sortedEvents = events.sort((eventA, eventB) => {
    if (eventA.date >= eventB.date && eventA.hour > eventB.hour) {
      return 1;
    } else {
      return -1;
    }
  });
  eventsCache[language] = sortedEvents;
  return sortedEvents;
};

export const fetchEventsPaths = (language: Language): string[] =>
  fetchEvents(language).map(
    ({ id }) => `${getUrlPrefix(language)}${EVENTS}/${id}`
  );

export const fetchEvent = (
  language: Language,
  eventId: string
): MyEvent | undefined =>
  fetchEvents(language).find(({ id }) => id === eventId);
