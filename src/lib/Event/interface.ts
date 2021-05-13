export interface RawEvent {
  id: string;
  name_fr: string;
  name_en: string;
  place: string;
  date: string;
  hour?: string;
  body_fr: string;
  body_en: string;
}

export interface MyEvent {
  id: string;
  name: string;
  place: string;
  date: string;
  hour?: string;
  body: string;
}
