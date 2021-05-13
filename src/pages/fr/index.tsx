import { GetStaticProps } from "next";
import { Home, Props as HomeProps } from "../../components/pages/Home";
import { fetchEvents } from "../../lib/Event/api";
import { FR } from "../../lib/language";

const language = FR;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const content = await import(`../../../content/pages/home_${language}.md`);
  const events = fetchEvents(language);
  return { props: { content: content.default, language: FR, events } };
};
export default Home;
