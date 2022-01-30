import { GetStaticPaths, GetStaticProps } from "next";
import { FR } from "../../../lib/LanguageContext";
import {
  EventPage,
  Props as EventPageProps,
} from "../../../components/pages/Event";
import { fetchEvent, fetchEventsPaths } from "../../../lib/Event/api";

const language = FR;

export const getStaticProps: GetStaticProps<EventPageProps> = async ({
  params,
}) => {
  const eventId = params.event as string;
  const event = fetchEvent(language, eventId);
  return {
    props: {
      language,
      event,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchEventsPaths(language);
  return {
    paths,
    fallback: false,
  };
};

export default EventPage;
