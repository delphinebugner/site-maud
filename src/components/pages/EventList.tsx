import { NextPage } from "next";
import { isEventPast } from "../../lib/dateUtils";
import { MyEvent } from "../../lib/Event/interface";
import { EN, Language } from "../../lib/language";
import { EventCardSection } from "../Events/EventCardSection.component";
import { Layout } from "../Layout";

export interface Props {
  events: MyEvent[];
  language: Language;
}
export const EventListPage: NextPage<Props> = ({ events, language }) => {
  const pastEvents = events.filter(isEventPast);
  const futureEvents = events.filter((event) => !isEventPast(event));
  return (
    <Layout language={language}>
      <EventCardSection
        events={futureEvents}
        language={language}
        title={language === EN ? "Next concerts" : "Concerts à venir"}
      />
      <EventCardSection
        events={pastEvents}
        language={language}
        title={language === EN ? "Past concerts" : "Concerts passés"}
      />
    </Layout>
  );
};
