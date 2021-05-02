import { GetStaticProps } from "next";
import { Home, Props as HomeProps } from "../components/pages/Home";
import { EN } from "../lib/language";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const content = await import(`../../content/pages/home_${EN}.md`);
  return { props: { content: content.default, language: EN } };
};
export default Home;
