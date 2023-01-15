import React from "react";
import { NextPage } from "next";
import { isEventPast } from "../../lib/dateUtils";
import { MyEvent } from "../../lib/Event/interface";
import { EN, Language } from "../../lib/LanguageContext";
import { EventCardSection } from "../Events/EventCardSection.component";
import { Layout } from "../Layout";
import { RoundImage } from "../atoms/RoundImage";

export interface Props {
  events: MyEvent[];
  language: Language;
  isInThePast: boolean;
}
export const EventListPage: NextPage<Props> = ({
  events,
  language,
  isInThePast,
}) => {
  const pastEvents = events.filter(isEventPast);
  const futureEvents = events.filter((event) => !isEventPast(event));

  return (
    <Layout>
      <div className="relative">
        <RoundImage
          src="/images/182.jpg"
          sizeDesktop={350}
          className="hidden lg:block absolute top-10 -right-20"
        />
        <RoundImage
          src="/images/231c.jpg"
          sizeDesktop={230}
          position="top"
          className="hidden lg:block absolute bottom-10 -left-12"
        />
        {!isInThePast && !!futureEvents.length && (
          <EventCardSection
            events={futureEvents}
            language={language}
            title={language === EN ? "Next concerts" : "Concerts à venir"}
          />
        )}
        {isInThePast && !!pastEvents.length && (
          <EventCardSection
            events={pastEvents}
            language={language}
            title={language === EN ? "Past concerts" : "Concerts passés"}
            isInThePast
          />
        )}
      </div>
    </Layout>
  );
};
