import { GetStaticProps } from "next";
import { Home } from "../../components/pages/Home";

const CURRENT_LANGUAGE = "fr";

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(
    `../../../content/pages/home_${CURRENT_LANGUAGE}.md`
  );
  return { props: { content: content.default } };
};
export default Home;
