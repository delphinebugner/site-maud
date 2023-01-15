import { GetStaticProps } from "next";
import {
  EventListPage,
  Props as EventListProps,
} from "../../../components/pages/EventList";
import { fetchEvents } from "../../../lib/Event/api";
import { FR } from "../../../lib/LanguageContext";

const language = FR;

export const getStaticProps: GetStaticProps<EventListProps> = async () => {
  const events = fetchEvents(language);
  return { props: { language, events, isInThePast: false } };
};
export default EventListPage;
