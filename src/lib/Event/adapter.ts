import { EN, Language } from "../language";
import { RawEvent, Event } from "./interface";

export const adaptRawEvent = (
  rawEvent: RawEvent,
  language: Language
): Event => ({
  id: rawEvent.id,
  name: language === EN ? rawEvent.name_en : rawEvent.name_fr,
  place: rawEvent.place,
  date: rawEvent.date,
  hour: rawEvent.hour,
  body: language === EN ? rawEvent.body_en : rawEvent.body_fr,
});
