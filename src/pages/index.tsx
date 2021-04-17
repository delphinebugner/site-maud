import { NextPage, GetStaticProps } from "next";

interface Props {
  content: { attributes: HomeAttributes };
}
interface HomeAttributes {
  title: string;
  body: string;
}
const HomePage: NextPage<Props> = ({ content }) => {
  const { attributes } = content;
  console.log("attributes", attributes);
  return (
    <>
      <h1>{attributes.title}</h1>
      <p>{attributes.body}</p>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../../content/pages/${"home"}.md`);
  return { props: { content: content.default } };
};
export default HomePage;
