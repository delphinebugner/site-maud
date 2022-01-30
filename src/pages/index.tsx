import { GetStaticProps } from "next";
import { Home, Props as HomeProps } from "../components/pages/Home";
import { fetchEvents } from "../lib/Event/api";
import { EN } from "../lib/LanguageContext";

const language = EN;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const content = await import(`../../content/pages/home_${language}.md`);
  const events = fetchEvents(language);
  return {
    props: { content: content.default, language, events },
  };
};
export default Home;
