import { GetStaticProps } from "next";
import {
  EventListPage,
  Props as EventListProps,
} from "../../components/pages/EventList";
import { fetchEvents } from "../../lib/Event/api";
import { EN } from "../../lib/LanguageContext";

const language = EN;

export const getStaticProps: GetStaticProps<EventListProps> = async () => {
  const events = fetchEvents(language);
  return { props: { language, events } };
};
export default EventListPage;
