import { NextPage } from "next";
import { isEventPast } from "../../lib/dateUtils";
import { MyEvent } from "../../lib/Event/interface";
import { EN, Language } from "../../lib/language";
import { EventCardSection } from "../Events/EventCardSection.component";
import { Layout } from "../Layout";
import { RoundImage } from "../RoundImage";

export interface Props {
  events: MyEvent[];
  language: Language;
}
export const EventListPage: NextPage<Props> = ({ events, language }) => {
  const pastEvents = events.filter(isEventPast);
  const futureEvents = events.filter((event) => !isEventPast(event));
  return (
    <Layout language={language}>
      <div className="relative">
        <RoundImage
          src="/images/182.jpg"
          sizeDesktop={350}
          className="hidden lg:block absolute top-10 -right-20"
        />
        <RoundImage
          src="/images/214.jpg"
          sizeDesktop={400}
          className="hidden lg:block absolute bottom-10 -left-36"
        />
        {!!futureEvents.length && (
          <EventCardSection
            events={futureEvents}
            language={language}
            title={language === EN ? "Next concerts" : "Concerts à venir"}
          />
        )}
        {!!pastEvents.length && (
          <EventCardSection
            events={pastEvents}
            language={language}
            title={language === EN ? "Past concerts" : "Concerts passés"}
          />
        )}
      </div>
    </Layout>
  );
};
