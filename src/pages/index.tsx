import { GetStaticProps } from "next";
import { Home } from "../components/pages/Home";

const DEFAULT_LANGUAGE = "en";

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(
    `../../content/pages/home_${DEFAULT_LANGUAGE}.md`
  );
  return { props: { content: content.default } };
};
export default Home;
