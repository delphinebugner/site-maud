import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";
import { Event, RawEvent } from "./interface";
import { adaptRawEvent } from "./adapter";
import { getUrlPrefix, Language } from "../language";
import { EVENTS } from "../routes";

const contentRoot = path.join(process.cwd(), "content/events");

const eventsCache: Partial<Record<Language, Event[]>> = {};

// This function can only be executed on the server side
export const fetchEvents = (language: Language): Event[] => {
  if (eventsCache[language]) {
    return eventsCache[language];
  }
  const eventFileNames = fs.readdirSync(contentRoot);
  const events = eventFileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(contentRoot, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContent, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const rawEvent = matterResult.data as RawEvent; // markdown is stored in matterResult.content ; data contains only attributes
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
    if (eventA.date < eventB.date) {
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
): Event | undefined => fetchEvents(language).find(({ id }) => id === eventId);
