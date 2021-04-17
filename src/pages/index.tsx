import { NextPage, GetStaticProps } from "next";

interface Props {
  content: { attributes: HomeAttributes };
}
interface HomeAttributes {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
const HomePage: NextPage<Props> = ({ content }) => {
  console.log(content);
  const { attributes } = content;
  console.log("attributes", attributes);
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <span className="font-bold text-6xl text-blue-600">
        {attributes.title}
      </span>
      <div className="h-2 w-full" />
      <p className="text-5xl">{attributes.subtitle}</p>
      <div className="h-2 w-full" />
      <p>{attributes.description}</p>
      <img src={attributes.image} />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../../content/pages/${"home"}.md`);
  return { props: { content: content.default } };
};
export default HomePage;
