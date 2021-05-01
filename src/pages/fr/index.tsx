import { GetStaticProps } from "next";
import { Home, Props as HomeProps } from "../../components/pages/Home";
import { FR } from "../../components/pages/utils";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const content = await import(`../../../content/pages/home_${FR}.md`);
  return { props: { content: content.default, language: FR } };
};
export default Home;
