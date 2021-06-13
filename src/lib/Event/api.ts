import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";
import { MyEvent, RawEvent } from "./interface";
import { adaptRawEvent } from "./adapter";
import { getUrlPrefix, Language } from "../language";
import { EVENTS } from "../routes";
import { fetchMdx } from "../fetchUtils";

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
        throw new Error(
          "id field not match with the path of its content source"
        );
      }
      return adaptRawEvent(rawEvent, language);
    });
  const sortedEvents = events.sort((eventA, eventB) => {
    if (eventA.date > eventB.date) {
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
