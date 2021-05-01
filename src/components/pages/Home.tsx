import { NextPage } from "next";
import Layout from "../Layout";

interface Props {
  content: { attributes: HomeAttributes };
}
interface HomeAttributes {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
export const Home: NextPage<Props> = ({ content }) => {
  const { attributes } = content;
  return (
    <Layout>
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
    </Layout>
  );
};
